import Head from 'next/head';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';

export default function Layout(props){

    const [nlcBpaPicSrc, nlcPicSrc] = ["/nlc2021logo.png", "/nlctheme.png"];
    let [logoPic, setLogoPic] = useState(nlcBpaPicSrc);
    let logoPicAsync = nlcBpaPicSrc;

    let ticking;

    const onScroll = () => {
        const elementsModifiedOnScroll = [
            document.querySelector("#pic-nav-container"),
            document.querySelector("#bpa-nlc-logo"),
            document.querySelector("#navbar-compensation")
        ]
        if(window.scrollY > 40 && logoPicAsync === nlcBpaPicSrc){
            setLogoPic(nlcPicSrc);
            logoPicAsync = nlcPicSrc;
            elementsModifiedOnScroll.forEach(element => {element.className = "scrolled"});
        } else
        if(window.scrollY < 40 && logoPicAsync === nlcPicSrc){
            setLogoPic(nlcBpaPicSrc);
            logoPicAsync = nlcBpaPicSrc;
            elementsModifiedOnScroll.forEach(element => {element.className = ""});
        }
    }

    useEffect(
        () => {
            window.addEventListener('scroll', () => {
                if(!ticking){requestAnimationFrame(onScroll)}
                ticking = false;
            });
            ticking = true;
        }, []
    );

    return (<div id="layout">
        <Head>
            <title>2021 NLC Orlando</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" /> 
        </Head>
        
        <div id="pic-nav-container">
            <img id="bpa-nlc-logo" src={logoPic} />
            <div id="nav-title-container">
                <h1>2021 NLC: Orlando, FL</h1>
                <Navbar />
            </div>
        </div>

        <div id="navbar-compensation" />
        {props.children}
    </div>)
}