import React, { useState, useEffect } from "react";
import Watch from "./components/Watch";
import "./App.css";
import Header from "./components/Header";
import VideoList from "./components/VideoList";
import SearchBar from "./components/SearchBar";

// const APIkey_1 = "AIzaSyAtTWostq1MsBKVBHh6HeQ2bX6y6xj8YyE";
const APIkey_2 = "AIzaSyB6uu8KTL1PayJX2z4aNUTxFmi3Ry16fSM";
const APIkey_youtube_search = "AIzaSyA5tO9GTE2eeYVJevuaZhtFhW_-FL1oA9s";
const playlistId = "PL3oW2tjiIxvTSdJ4zqjL9dijeZ0LjcuGS";

function App() {
  const [results, setResults] = useState([]);
  const [video, setVideo] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  function searchVideo(keyword) {
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${keyword}&type=video&key=${APIkey_youtube_search}`;
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

  const onSearchHandler = (keyword) => {
    setLoading(true);
    searchVideo(keyword);
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

  function getPlaylist(playlistId) {
    const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${playlistId}&key=${APIkey_2}`;

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
    getPlaylist(playlistId);
  }, []);

  return (
    <div className="App">
      <Header isLoading={loading} />
      <SearchBar onSearch={onSearchHandler} />
      {results && !error && (
        <div className="content">
          <div className="searched-videos">
            <VideoList videoAPI={results} onClickTitle={clickTitleHandler} />
          </div>

          <Watch
            video={video}
            endHandler={endHandler}
            readyHandler={readyHandler}
          />
        </div>
      )}
      {error && <p className="error">{`${error}`}</p>}
    </div>
  );
}

export default App;
