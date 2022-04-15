import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar'
import style from './Search.module.css'
import ReactPlayerVideo from "../../components/ReactPlayer/ReactPlayerVideo";
import VideoList from "../../components/videoList/VideoList";

export default function Search(){
    const [videos, setVideos] = useState([]);
    const [video, setVideo] = useState();
    const[error, setError] = useState();
    const location =useLocation();
    const query = new URLSearchParams(location.search);
    const keyword = query.get('keyword');
    const apiKey = process.env.REACT_APP_API_KEY_SEARCH_1;
    console.log(apiKey);
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${keyword}&type=video&key=${apiKey}`;

    //search videos...
    const searchVideos = async (keyword, url)=>{
         try {
            const res = await axios.get(url);
            console.log(res.data.items);
            const filteredData = res.data.items.map((item) => {
                return {
                    id: Math.random().toString(),
                    title: item.snippet.title,
                    desc: item.snippet.description,
                    vid: item.id.videoId,
                    publishedAt: item.snippet.publishedAt,
                    imageURL: item.snippet.thumbnails.medium.url,
                    imageURLDefault: item.snippet.thumbnails.default.url,
                    videoOwner : item.snippet.channelTitle
                };
            });
            setVideos(filteredData);
            setVideo(filteredData[0]);
         } catch (error) {
             setError(`${error.message} : Videos not found`);
         }
    }
    useEffect(()=>{
        searchVideos(keyword, url);
        console.log("1");
    },[keyword, url]);

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
    console.log(video)
    return(
        <div className={style['search-video-main-container']}>
            <Header/>
            <div className={style['search-video-container']}>
                <Sidebar/>
                <div className={style['search-video-content']}>
                    {video && <ReactPlayerVideo video={video}onEnd={onEndHandler}/>}
                    {video && <VideoList index={videos.indexOf(video)} videos={videos} onClickItem={onClickHandler}/>}
                    {error && <h1 className='error-message'>{error}</h1>}  
                </div>
            </div>
        </div>
    )
}