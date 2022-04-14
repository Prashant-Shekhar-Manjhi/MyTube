import style from "./News.module.css"
import axios from "axios";
import React, {useState, useEffect} from "react";
import Header from '../../components/header/Header'
import Sidebar from "../../components/sidebar/Sidebar";
import ReactPlayerVideo from "../../components/ReactPlayer/ReactPlayerVideo";
import VideoList from "../../components/videoList/VideoList";

export default function News(){
    const [newsVideos, setNewsVideos] = useState([]);
    const [newsVideo, setNewsVideo] = useState({});

    //video id's
    const apiKey = process.env.REACT_APP_API_KEY_SEARCH_3
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&id=Cy_6-_XUW-c%2CYZCSwQI8yoA%2CMN8p-Vrn6G0%2Cnyd-xznCpJc%2CXmm3Kr5P1Uw&key=${apiKey}`;
    

    const fetchNews = async (url)=>{
        try{
            const res = await axios.get(url);
            console.log(res);
            const filteredData = res.data.items.map(item=>{
                return {
                    id: Math.random().toString(),
                    title: item.snippet.title,
                    desc: item.snippet.description,
                    vid: item.id,
                    publishedAt: item.snippet.publishedAt,
                    imageURL: item.snippet.thumbnails.medium.url,
                    imageURLDefault: item.snippet.thumbnails.default.url,
                    videoOwner : item.snippet.channelTitle
                };
            })
            setNewsVideos(filteredData);
            setNewsVideo(filteredData[0]);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        fetchNews(url);
        console.log('1');
    },[url]);
    const onEndHandler = ()=>{
        let currentIndex = newsVideos.indexOf(newsVideo);
        if( currentIndex === newsVideos.length-1){
            currentIndex = 0;
        }
        else currentIndex += 1;
        setNewsVideo(newsVideos[currentIndex]);
    }
    const onClickHandler = (newsVideo)=>{
        setNewsVideo(newsVideo);
    }
    return(
        <div className={style['news-main-container']}>
            <Header/>
            <div className={style['news-container']}>
                <Sidebar/>
                <div className={style['news-container-content']}>
                    {newsVideo && <ReactPlayerVideo video={newsVideo}onEnd={onEndHandler}/>}
                    {newsVideo && <VideoList index={newsVideos.indexOf(newsVideo)} videos={newsVideos} onClickItem={onClickHandler}/>}      
                </div>
            </div>
        </div>
    )
}