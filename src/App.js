import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import "./App.css";
import Header from "./components/Header";
import VideoList from "./components/VideoList";
import SearchBar from "./components/SearchBar";

// const APIkey_1 = "AIzaSyAtTWostq1MsBKVBHh6HeQ2bX6y6xj8YyE";
const APIkey_2 = "AIzaSyB6uu8KTL1PayJX2z4aNUTxFmi3Ry16fSM";
const APIkey_youtube_search = "AIzaSyA5tO9GTE2eeYVJevuaZhtFhW_-FL1oA9s";
const playlistId = "PLO7-VO1D0_6M1xUjj8HxTxskouWx48SNw";
const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${playlistId}&key=${APIkey_2}`;

function App() {
  const [results, setResults] = useState();
  const [video, setVideo] = useState({});
  const [error, setError] = useState("");

  const clickTitleHandler = (video) => {
    setVideo(video);
  };

  function searchVideo(keyword) {
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&type=video&key=${APIkey_youtube_search}`;
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
        console.log(filterSearchedData);
        setResults(filterSearchedData);
        setVideo(filterSearchedData[0]);
      })
      .catch((error) => {
        setError(error);
      });
  }

  const onSearchHandler = (keyword) => {
    searchVideo(keyword);
  };

  function getPlaylist() {
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
        console.log(filteredData);
        setResults(filteredData);
        setVideo(filteredData[0]);
      })
      .catch((err) => {
        setError(err);
      });
  }

  useEffect(() => {
    getPlaylist();
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={onSearchHandler} />

      {results && !error && (
        <div className="content">
          <div className="searched-videos">
            <VideoList videoAPI={results} onClickTitle={clickTitleHandler} />
          </div>
          <div className="searched-video">
            <ReactPlayer
              width="100%"
              height="65em"
              controls
              playing
              url={`https://youtu.be/${video.vid}`}
              className="video-player"
            />
            <h3 className="video-title">{video.title}</h3>
            <p className="date">
              <span>Published At -</span>- {video.publishedAt}
            </p>
            {video.desc && video.desc.length > 500 ? (
              <p className="description">{video.desc.slice(0, 500) + "..."}</p>
            ) : (
              <p className="description">{video.desc}</p>
            )}
          </div>
        </div>
      )}
      {error && <p className="error">{`${error}`}</p>}
    </div>
  );
}

export default App;
