import React from "react"
import style from "./VideoList.module.css";

export default function VideoList({index, videos, onClickItem}){
    const playingVideo = videos[index];
    const nonPlayingVideos = videos.filter((video)=>{
        return videos.indexOf(video) !== index;
    })
    console.log(playingVideo);
    return (
        <div className={style['video-list-container']}>
            <hr className={style["video-list-line"]}/>
            <header className={style["video-list-header"]}>
                {videos[0] && <p>{videos[0].channelTitle}</p>}
            </header>
            {playingVideo && <li
                className={style['playing-video']}
                key={playingVideo.id}
            >
                <img
                    className={style['video_image']}
                    src={playingVideo?.imageURLDefault}
                    alt="video_image"
                />
                <div className={style['video-detail']}>
                    <h4 className={style['video-detail-title']}>
                        {playingVideo.title.slice(0,50)}...
                    </h4>
                    <p className={style['video-detail-channel']}>{playingVideo.videoOwner}</p>
                </div>  
            </li>}
            <div className={style['videos-list']}>                
                <ol className={style["video-list"]}>
                    {nonPlayingVideos.map((video) => {
                        return (
                            <li
                                className={style['video']}
                                key={video.id}
                                onClick={() => {
                                    window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                    });
                                    return onClickItem(video);
                                }}
                            >
                                <img
                                    className={style['video_image']}
                                    src={video.imageURLDefault}
                                    alt="video_image"
                                />
                                <div className={style['video-detail']}>
                                    <h4 className={style['video-detail-title']}>
                                        {video.title.slice(0,50)}...
                                    </h4>
                                    <p className={style['video-detail-channel']}>{video.videoOwner}</p>
                                </div>  
                            </li>
                        );
                    })}
                </ol>
            </div>
            <hr className={style["video-list-line"]}/>
        </div>
    );
}