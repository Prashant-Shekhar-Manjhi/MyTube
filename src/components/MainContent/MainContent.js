import React, {useEffect, useContext} from "react";
import { useHistory } from "react-router-dom";
import style from "./MainContent.module.css"
import Video from "../video/Video";
import {fetchVideos} from '../../apiCall';
import {VideoContext} from '../../context/VideoContext'

 export default function MainContent(){
    const {dispatch} = useContext(VideoContext);
    let history = useHistory();
    const {videos, error} = useContext(VideoContext);
    // const ApiKey = process.env.REACT_APP_API_KEY_PLAYLIST_1;
    // const ApiKey2 = process.env.REACT_APP_API_KEY_PLAYLIST_2;
    const playlistId = "PL3oW2tjiIxvTSdJ4zqjL9dijeZ0LjcuGS";
    // const playlistId2= "PLO7-VO1D0_6M1xUjj8HxTxskouWx48SNw";
    // const url1 = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${playlistId}&key=${ApiKey}`;
    // const url2 = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${playlistId2}&key=${ApiKey2}`;
    useEffect(()=>{
        fetchVideos({playlistId:playlistId}, dispatch);
    },[playlistId, dispatch]);
    const onClickHandlar = (video)=>{
        const index = videos?.indexOf(video);
        videos && history.push({
            pathname: '/watch',
            search: `?index=${index}`,
        });
    }
    return (
        <>
        {!error && <div className={style['main-content-container']}>
            {videos && videos.map(video=><Video key={video.id} video={video} onClickVideo={onClickHandlar}/>)}
        </div>}
        {error && <h1 className='error-message'>{`${error} : Videos not Found`}</h1>} 
        </>
    );
}