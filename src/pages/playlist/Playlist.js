import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import ReactPlayerVideo from '../../components/ReactPlayer/ReactPlayerVideo';
import VideoList from '../../components/videoList/VideoList';
import style from "./Playlist.module.css";
import axios from 'axios';
export default function Playlist(){
    const [videos, setVideos] = useState();
    const [video, setVideo] = useState();
    const [error, setError] = useState();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const playlistId = query.get('playlistId');
    const apiKey1 = process.env.REACT_APP_API_KEY_PLAYLIST_3;
    const apiKey2 = process.env.REACT_APP_API_KEY_SEARCH_2;
    
    
    const fetchVideos = async (playlistId, {apiKey1 , apiKey2})=>{
        const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${playlistId}&key=${apiKey1}`;
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
        let filteredData2;
        if(response.data.nextPageToken){
            const nextPageToken = response.data.nextPageToken;
            const url2 = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&pageToken=${nextPageToken}&playlistId=${playlistId}&key=${apiKey2}`
            const response2 = await axios.get(url2);
            filteredData2 = response2.data.items.map((item) => {
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
        }
            filteredData2 ? setVideos([...filteredData, ...filteredData2]) : setVideos(filteredData);
            setVideo(filteredData[0]);    
        } catch (error) {
            setError(`${error.message} : Videos not found`);
        }
    }

    useEffect(()=>{
        fetchVideos(playlistId, {apiKey1, apiKey2});
    }, [playlistId, apiKey1, apiKey2]);

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
                    {!error && video && <ReactPlayerVideo video={video}onEnd={onEndHandler}/>}
                    {!error && video && <VideoList index={videos.indexOf(video)} videos={videos} onClickItem={onClickHandler}/>}  
                    {error && <h1 className='error-message'>{error}</h1>}     
                </div>
            </div>
        </div>
    );
}