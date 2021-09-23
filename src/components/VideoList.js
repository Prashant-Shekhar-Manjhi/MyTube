import React from "react";
import "./VideoList.css";

export default function VideoList(props) {
  return (
    <div className="videos">
      <header className="video-list-header">
        {props.videoAPI[0] && <p>{props.videoAPI[0].channelTitle}</p>}
      </header>
      <ol className="video-list">
        {props.videoAPI.map((video) => {
          return (
            <li
              className="video"
              key={video.id}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
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
