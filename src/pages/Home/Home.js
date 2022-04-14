import React from 'react'
import Header from '../../components/header/Header';
import MainContent from '../../components/MainContent/MainContent';
import Sidebar from '../../components/sidebar/Sidebar';
import style from './Home.module.css'

export default function Home(){
    return (
        <div className={style['home-main-container']}>
            <Header/>
            <div className={style['home-main-content']}>
                <Sidebar/>
                <MainContent/>
            </div>
       
        </div>
    );
}