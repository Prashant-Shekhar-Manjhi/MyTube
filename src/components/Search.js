import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { useLocation, useHistory } from "react-router-dom";
import VideoList from "./VideoList";
import WatchVideo from "./WatchVideo";
import Header from "./Header";
import SearchBar from "./SearchBar";

const APIkey_youtube_search = process.env.REACT_APP_API_KEY_SEARCH_2;

export default function Search() {
  const [results, setResults] = useState();
  const [video, setVideo] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const history = useHistory();

  const query = new URLSearchParams(location.search);
  const keyword = query.get("keyword");

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
  function searchVideo(keyword, APIkey) {
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${keyword}&type=video&key=${APIkey}`;
    fetch(url)
      .then((response) => {
        if (!response.ok)
          throw new Error(`${response.status} Videos not Found `);
        return response.json();
      })
      .then((data) => {
        const filterSearchedData = data.items.map((item) => {
          return {
            id: Math.random().toString(),
            title: item.snippet.title,
            desc: item.snippet.description,
            vid: item.id.videoId,
            publishedAt: item.snippet.publishedAt,
            channelTitle: item.snippet.channelTitle,
            imageURL: item.snippet.thumbnails.default.url,
          };
        });
        setResults(filterSearchedData);
        setVideo(filterSearchedData[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }
  useEffect(() => {
    searchVideo(keyword, APIkey_youtube_search);
  }, [keyword]);

  const onSearchHandler = (keyword) => {
    setLoading(true);
    history.push(`/search?keyword=${keyword}`);
  };
  return (
    <Fragment>
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
            <VideoList videoAPI={results} onClickTitle={clickTitleHandler} />
          </div>
        </div>
      )}
      {error && <p className="error">{`${error}`}</p>}
    </Fragment>
  );
}
