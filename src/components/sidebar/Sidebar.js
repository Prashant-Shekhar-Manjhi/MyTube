import React from "react";
import style from "./Sidebar.module.css";
import { NavLink, useHistory} from "react-router-dom";
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
// import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
export default function Sidebar(){
    const history = useHistory();
    const mixtapePlaylist = "PL9bw4S5ePsEGvKT-BLodE1Hen7Yuqhbd2";
    const popMusicPlaylist = "PLMC9KNkIncKtPzgY-5rmhvj7fax8fdxoj";
    const hindiOldSongsPlaylist = 'PLXCoHsJ9oLecZCEFBjTlDaPYXZo7vgtUH';
    const hindiNewSongsPlaylist = 'PLO7-VO1D0_6M1xUjj8HxTxskouWx48SNw';
    //Mixtape...
    const onClickMixtape = ()=>{
        history.push({
            pathname: '/playlist',
            search: `?playlistId=${mixtapePlaylist}`,
        })
    }
    //English Song...
    const onClickEnglishSong = ()=>{
        history.push({
            pathname:'/playlist',
            search: `playlistId=${popMusicPlaylist}`
        })
    }

    //Hindi old songs...
    const onClickHindiOldSong = ()=>{
        history.push({
            pathname:'/playlist',
            search: `playlistId=${hindiOldSongsPlaylist}`
        })
    }
    // hindi new song...
    const onClickHindiNewSong = ()=>{
        history.push({
            pathname:'/playlist',
            search: `playlistId=${hindiNewSongsPlaylist}`
        })
    }

    const onClickExplore = ()=>{
        alert("Yet to be implemented...")
    }

    const onClickSubscription = ()=>{
        alert("Yet to be implemented...")
    }

    const onClickLibrary = ()=>{
        alert("Yet to be implemented...")
    }

    const onClickHistory = ()=>{
        alert("Yet to be implemented...")
    }

    const onClickYourVideo = ()=>{
        alert("Yet to be implemented...")
    }
    

    return (
        <div className={style['sidebar-container']}>
            <ul className={style['sidebar-list-items']}>
                <NavLink to="/" className={style['sidebar-list-item']} activeClassName={style["active-sidebar-list-item"]}>
                    <HomeOutlinedIcon className={style['sidebar-icon']}/>
                    <p className={style['sidebar-list-item-text']}>Home</p>
                </NavLink>
                <li className={style['sidebar-list-item']} onClick={onClickExplore}>
                    <ExploreOutlinedIcon className={style['sidebar-icon']}/>
                    <p className={style['sidebar-list-item-text']}>Explore</p>
                </li>
                <li className={style['sidebar-list-item']} onClick={onClickSubscription}>
                    <SubscriptionsOutlinedIcon className={style['sidebar-icon']} />
                    <p className={style['sidebar-list-item-text']}>Subscription</p>
                </li>
                <hr className={style["sidebar-line"]}/>
                <li className={style['sidebar-list-item']} onClick={onClickLibrary}>
                    <VideoLibraryOutlinedIcon className={style['sidebar-icon']}/>
                    <p className={style['sidebar-list-item-text']}>Library</p>
                </li>
                <li className={style['sidebar-list-item']} onClick={onClickHistory}>
                    <RestoreOutlinedIcon className={style['sidebar-icon']}/>
                    <p className={style['sidebar-list-item-text']}>History</p>
                </li>
                <li className={style['sidebar-list-item']} onClick={onClickYourVideo}>
                    <OndemandVideoOutlinedIcon className={style['sidebar-icon']}/>
                    <p className={style['sidebar-list-item-text']}>Your videos</p>
                </li>
                <li className={style['sidebar-list-item']} onClick={onClickHindiNewSong}>
                    <PlaylistPlayIcon className={style['sidebar-icon']}/>
                    <p className={style['sidebar-list-item-text']}>New Hindi</p>
                </li>
                <li className={style['sidebar-list-item']} onClick={onClickMixtape}>
                    <PlaylistPlayIcon className={style['sidebar-icon']}/>
                    <p className={style['sidebar-list-item-text']}>Mixtape</p>
                </li>
                <li className={style['sidebar-list-item']} onClick={onClickEnglishSong}>
                    <PlaylistPlayIcon className={style['sidebar-icon']}/>
                    <p className={style['sidebar-list-item-text']}>Pop Music</p>
                </li>
                <li className={style['sidebar-list-item']} onClick={onClickHindiOldSong}>
                    <PlaylistPlayIcon className={style['sidebar-icon']}/>
                    <p className={style['sidebar-list-item-text']}>Old Hindi</p>
                </li>
            </ul>
        </div>
    );
}