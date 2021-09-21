import React from "react";
import "./VideoList.css";

// APIkey=AIzaSyAtTWostq1MsBKVBHh6HeQ2bX6y6xj8YyE

export default function VideoList(props) {
  return (
    <div className="videos">
      <header className="video-list-header">
        <p>{props.videoAPI[0].channelTitle}</p>
      </header>
      <ol className="video-list">
        {props.videoAPI.map((video) => {
          return (
            <li
              className="video"
              key={video.id}
              onClick={() => props.onClickTitle(video)}
            >
              {video.title}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
