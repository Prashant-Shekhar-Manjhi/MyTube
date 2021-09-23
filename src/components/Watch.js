import React from "react";
import ReactPlayer from "react-player";
import "./Watch.css";

export default function Watch(props) {
  return (
    <div className="searched-video">
      <ReactPlayer
        width="100%"
        height="65em"
        controls
        playing
        url={`https://youtu.be/${props.video.vid}`}
        onEnded={props.endHandler}
        onReady={props.readyHandler}
        className="video-player"
        id="video-player"
      />
      <h3 className="video-title">{props.video.title}</h3>
      <p className="date">
        <span>Published At -</span>- {props.video.publishedAt}
      </p>
      {props.video.desc && props.video.desc.length > 500 ? (
        <p className="description">{props.video.desc.slice(0, 500) + "..."}</p>
      ) : (
        <p className="description">{props.video.desc}</p>
      )}
    </div>
  );
}
