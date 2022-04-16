import React, {useState} from "react";
import style from "./Video.module.css";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

export default function Video({video,onClickVideo}){
    const [imgError,setImageError] = useState(false);
    const onErrorImage = ()=>{
        setImageError(true);
    }
    let imageURL = !imgError ? video.imageURL : null;
    return (
        <div className={style['video-item']} onClick={()=>onClickVideo(video)}>
            <div className={style['video-item-thumbnail']}>
                <img
                    className={style['tumbnail-image']}
                    alt="Thumbnail"
                    src={imageURL}
                    onError={onErrorImage}
                />
            </div>
            <div className={style['video-item-detail']}>
                <img
                    className={style["video-item-logo"]}
                    src={video.imageURLDefault}
                    alt="logo"
                />
                <div className={style['video-item-title-detail']}>
                    <h4 className={style["video-item-title"]}>{video.title.slice(0,30)}</h4>
                    <p className={style['video-item-channel-title']}>{video.videoOwner}</p>
                </div>
                <MoreVertOutlinedIcon className={style["video-item-menu"]}/>
            </div>
        </div>
    );
}