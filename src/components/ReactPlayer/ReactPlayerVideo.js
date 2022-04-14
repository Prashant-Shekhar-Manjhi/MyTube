import ReactPlayer from "react-player";
import style from './ReactPlayerVideo.module.css';

export default function ReactPlayerVideo({video, onEnd}){
    return(
        <div className={style['video-player']}>
            <ReactPlayer
                className={style['video-player-video']}
                id="video-player"
                width="100%"
                height="60rem"
                controls
                playing
                onEnded={()=>onEnd()}
                url={`https://youtu.be/${video.vid}`}
            />
            <h3 className={style['video-player-title']}>{video.title && (video.title.length >70 ? `${video.title?.slice(0,75)}...` :  video.title)}</h3>
            <div className={style['video-channel-detail']} >
                <img
                    className={style['video-channel-image']}
                    src={video.imageURLDefault}
                    alt="icon"
                />
                <h4 className={style['video-channel-name']}>{video.videoOwner}</h4>
            </div>
            <p className={style['video-player-desc']}>{video.desc && (video.desc.length > 500 ? `${video.desc.slice(0,500)}...` : video.desc)} </p>
        </div>     
    )
}