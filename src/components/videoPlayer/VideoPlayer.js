import style from "./VideoPlayer.module.css";
import ReactPlayerVideo from "../../components/ReactPlayer/ReactPlayerVideo";
import VideoList from "../videoList/VideoList";
import { useHistory } from "react-router-dom";
export default function VideoPlayer({video, videos}){
    const history = useHistory();
    const onClickHandlar = (video)=>{
        const index = videos?.indexOf(video);
        videos && history.push({
            pathname: '/watch',
            search: `?index=${index}`,
            state: { videos : videos }
        });
    }
    const onEndHandler = ()=>{
        let index = videos?.indexOf(video);
        if(index === videos?.length-1) index = 0;
        else index += 1;
        videos && history.push({
            pathname: '/watch',
            search: `?index=${index}`,
            state: { videos : videos }
        });
    }
    return(
        <div className={style["video-player-container"]}>
            <ReactPlayerVideo video={video} onEnd={onEndHandler}/>
            {videos && <VideoList index={videos.indexOf(video)} videos={videos} onClickItem={onClickHandlar}/>}
        </div>
    );
}