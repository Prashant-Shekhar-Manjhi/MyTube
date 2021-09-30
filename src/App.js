import React, { useState, useEffect, Suspense } from "react";
import WatchVideo from "./components/WatchVideo";
import "./App.css";
import Header from "./components/Header";
import VideoList from "./components/VideoList";
import SearchBar from "./components/SearchBar";
import { Fragment } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

const Search = React.lazy(() => import("./pages/Search"));
const News = React.lazy(() => import("./pages/News"));

const APIkey_youtube_playlist = process.env.REACT_APP_API_KEY_PLAYLIST_1;
const playlistId = "PL3oW2tjiIxvTSdJ4zqjL9dijeZ0LjcuGS";

function App() {
  const [results, setResults] = useState();
  const [video, setVideo] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  let history = useHistory();

  const onSearchHandler = (keyword) => {
    setLoading(true);
    history.push(`/search?keyword=${keyword}`);
    setLoading(false);
  };

  const clickTitleHandler = (video) => {
    setLoading(true);
    setVideo(video);
  };

  const endHandler = () => {
    if (results.indexOf(video) === results.length - 1) {
      setVideo(results[0]);
    } else setVideo(results[results.indexOf(video) + 1]);
  };

  const readyHandler = () => {
    setLoading(false);
  };

  function getPlaylist(playlistId, APIkey) {
    const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${playlistId}&key=${APIkey}`;

    fetch(url)
      .then((response) => {
        if (!response.ok)
          throw new Error(`${response.status} Playlist not found.`);
        return response.json();
      })
      .then((data) => {
        const filteredData = data.items.map((item) => {
          return {
            id: item.id,
            title: item.snippet.title,
            desc: item.snippet.description,
            vid: item.contentDetails.videoId,
            publishedAt: item.snippet.publishedAt,
            channelTitle: item.snippet.channelTitle,
            imageURL: item.snippet.thumbnails.default.url,
          };
        });

        setResults(filteredData);
        setVideo(filteredData[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    getPlaylist(playlistId, APIkey_youtube_playlist);
  }, []);

  return (
    <Fragment>
      <Switch>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Route path="/" exact>
            <Header isLoading={loading} />
            <SearchBar onSearch={onSearchHandler} />
            {results && !error && (
              <div className="content">
                <WatchVideo
                  video={video}
                  endHandler={endHandler}
                  readyHandler={readyHandler}
                />
                <div className="searched-videos">
                  <VideoList
                    videoAPI={results}
                    onClickTitle={clickTitleHandler}
                  />
                </div>
              </div>
            )}
            {error && <p className="error">{`${error}`}</p>}
          </Route>
          <Route path="/newsLive">
            <News />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/*">
            {/* <h1 className="page-not-found">Page Not Found.</h1> */}
          </Route>
        </Suspense>
      </Switch>
    </Fragment>
  );
}
export default App;
