import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import "./App.css";
import Header from "./components/Header";
import VideoList from "./components/VideoList";
import SearchBar from "./components/SearchBar";
const APIkey = "AIzaSyAtTWostq1MsBKVBHh6HeQ2bX6y6xj8YyE";
const playlistId = "PLO7-VO1D0_6M1xUjj8HxTxskouWx48SNw";
const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=80&playlistId=${playlistId}&key=${APIkey}`;

function App() {
  const [results, setResults] = useState();
  const [video, setVideo] = useState({});

  const clickTitleHandler = (video) => {
    setVideo(video);
  };

  const fetchVideoHandler = () => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const videos = data.items.map((item) => {
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
        setResults(videos);
        setVideo(videos[0]);
        console.log(videos);
      });
  };

  useEffect(() => {
    fetchVideoHandler();
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchBar />

      {results && (
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

            <p className="description">{video.desc.slice(0, 500) + "..."}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
