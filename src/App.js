import React, { useState, useEffect } from "react";
import WatchVideo from "./components/WatchVideo";
import "./App.css";
import Header from "./components/Header";
import VideoList from "./components/VideoList";
import SearchBar from "./components/SearchBar";
import { Fragment } from "react";
// import VoiceModal from "./components/VoiceModal";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";

const APIkey_youtube_search = process.env.REACT_APP_API_KEY_SEARCH_2;
const APIkey_youtube_playlist = process.env.REACT_APP_API_KEY_PLAYLIST_1;
const playlistId = "PL3oW2tjiIxvTSdJ4zqjL9dijeZ0LjcuGS";

function App() {
  console.log(process.env);
  const [results, setResults] = useState();
  const [video, setVideo] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const onSearchHandler = (keyword) => {
    setLoading(true);
    searchVideo(keyword, APIkey_youtube_search);
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
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }

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
      <SearchBar onSearch={onSearchHandler} />

      <Header isLoading={loading} />
      {results && !error && (
        <div className="content">
          <div className="searched-videos">
            <VideoList videoAPI={results} onClickTitle={clickTitleHandler} />
          </div>

          <WatchVideo
            video={video}
            endHandler={endHandler}
            readyHandler={readyHandler}
          />
        </div>
      )}
      {error && <p className="error">{`${error}`}</p>}
    </Fragment>
  );
}

export default App;
