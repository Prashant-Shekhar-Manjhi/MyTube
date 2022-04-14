import React,{useEffect,useState,useContext} from 'react'
import { useLocation } from "react-router-dom";
import Header from '../../components/header/Header';
import style from './WatchVideo.module.css';
import VideoPlayer from '../../components/videoPlayer/VideoPlayer';
import Sidebar from '../../components/sidebar/Sidebar';
import {VideoContext} from "../../context/VideoContext"
export default function WatchVideo(){
    const [video, setVideo] = useState({});
    const videos = useContext(VideoContext).videos;
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const index = query.get("index");
    useEffect(()=>{
        videos && setVideo(videos[index]);
    },[index,videos])
    return (
        <div className={style['watch-video-main-container']}>
            <Header/>
            <div className={style['watch-video-container']}>
                <Sidebar/>
                {video && videos && <VideoPlayer video={video} videos={videos}/>}
            </div>
        </div>
    )}