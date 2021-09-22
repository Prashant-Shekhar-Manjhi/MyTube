import React from "react";
import "./VideoList.css";

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
              onClick={() => {
                return props.onClickTitle(video);
              }}
            >
              <img
                className="video_image"
                src={video.imageURL}
                alt="video_image"
              />
              {video.title}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
