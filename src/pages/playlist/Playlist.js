import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import ReactPlayerVideo from '../../components/ReactPlayer/ReactPlayerVideo';
import VideoList from '../../components/videoList/VideoList';
import style from "./Playlist.module.css";
import axios from 'axios';
export default function Playlist(){
    const [videos, setVideos] = useState([]);
    const [video, setVideo] = useState({});
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const Mixtape = query.get('playlistId');
    const apiKey = process.env.REACT_APP_API_KEY_PLAYLIST_2;
    const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${Mixtape}&key=${apiKey}`;
    
    const fetchVideos = async (url)=>{
        try {
            const response = await axios.get(url);
            const filteredData = response.data.items.map((item) => {
            return {
                id: item.id,
                title: item.snippet.title,
                desc: item.snippet.description,
                vid: item.contentDetails.videoId,
                publishedAt: item.snippet.publishedAt,
                channelTitle: item.snippet.channelTitle,
                imageURL: item.snippet.thumbnails.medium.url,
                imageURLDefault: item.snippet.thumbnails.default.url,
                videoOwner : item.snippet.videoOwnerChannelTitle
            };
        });
            setVideos(filteredData);
            setVideo(filteredData[0]);    
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchVideos(url);
    }, [url]);

    const onEndHandler = ()=>{
        let currentIndex = videos.indexOf(video);
        if( currentIndex === videos.length-1){
            currentIndex = 0;
        }
        else currentIndex += 1;
        setVideo(videos[currentIndex]);
    }
    const onClickHandler = (video)=>{
        setVideo(video);
    }

    return(
        <div className={style['playlist-video-main-container']}>
            <Header/>
            <div className={style['playlist-video-container']}>
                <Sidebar/>
                <div className={style['playlist-container-content']}>
                    {video && <ReactPlayerVideo video={video}onEnd={onEndHandler}/>}
                    {video && <VideoList index={videos.indexOf(video)} videos={videos} onClickItem={onClickHandler}/>}      
                </div>
            </div>
        </div>
    );
}