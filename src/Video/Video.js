import React, {useEffect, useRef, useState} from 'react';
import Slider from "./slider";


function Video() {

    const inputEl = useRef(null);
    const videoRef = useRef(null)
    const [sheck, setCheck] = useState(false)
    const [width, setWidth] = useState('100px')
    const [volume, setVolume] = useState(1)
    const [currentTime, setTime] = useState(0)
    const [sizeFile, SetSize] = useState(0)
    const [nameFile, SetName] = useState('')
    const [durationFile, setDuration] = useState(NaN)
    const [file, setFile] = useState();
    const [fileURL, setFileURL] = useState();

    const upload = (e) => {
        debugger
        console.log(e)
        const newFile = e.target.files && e.target.files[0];
        setFile(newFile);
        setFileURL(window.URL.createObjectURL(newFile));
        SetSize(Math.floor(inputEl.current.files[0].size / 1024000))
        SetName(inputEl.current.files[0].name)
        setDuration(videoRef.current.duration)
    }

    const onChangeclick = () => {
        setCheck(!sheck)
    }


    useEffect(() => {

        setInterval(() => {

            if (videoRef && videoRef.current && videoRef.current.currentTime) {
                setTime(Math.floor(videoRef.current.currentTime));

            }

        }, 0);
    }, []);

    const play = () => videoRef && videoRef.current && videoRef.current.play() && setTime(videoRef.current.currentTime);
    const pause = () => videoRef && videoRef.current && videoRef.current.pause();
    const valueUp = () => {
        if (videoRef && videoRef.current && videoRef.current.volume < 0.9) {
            setVolume(videoRef.current.volume += 0.1)
        } else videoRef && videoRef.current && (setVolume(videoRef.current.volume = 1))
    }
    const valueDown = () => {
        if (videoRef && videoRef.current && videoRef.current.volume > 0.1) {
            setVolume(videoRef.current.volume -= 0.1)
        } else videoRef && videoRef.current && (setVolume(videoRef.current.volume = 0));
    };

    const fuulScreen = () => videoRef && videoRef.current && (videoRef.current.webkitDisplayingFullscreen === true)


    const ChangedVolume = (value) => {
        if (videoRef && videoRef.current) setVolume(videoRef.current.volume = value)
    }


    const aboutVideo = () => {
        debugger
        console.log(videoRef)
        //console.log(inputEl)
    }


    const fullScreen = () => {
        if (videoRef && videoRef.current)
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            } else {
                console.log("Fullscreen API is not supported");
            }
    };


    return (

        <div style={{
            display:'flex',
            flexDirection:'column'
        }}>
            <div>
            <input ref={inputEl} type={'file'} style={{display: 'none'}} onChange={e => upload(e)}/>
</div>
            <div>
                <div style={{margin:'15px 0'}}>
                    <video width="300px" fullscreen={true} src={fileURL} ref={videoRef} controls={sheck}
                           style={{width: {width}}}/>
                </div>
                <div>
                    video
                    controls
                    <input type="checkbox" checked={sheck}
                           onChange={onChangeclick}/>
                </div>

            <button onClick={play}>play</button>
            <button onClick={pause}>pause</button>
            <button onClick={valueUp}>valueUp</button>
            <button onClick={valueDown}>valueDown</button>
            <button onClick={fullScreen}>full screen</button>
            <button onClick={aboutVideo}>ABOUT VIDEO</button>

            <button onClick={() =>
                inputEl && inputEl.current && inputEl.current.click()}

            >add
            </button>


            <Slider volume={volume} ChangedVolume={ChangedVolume}/>
            <div>
                current Time:<br />
                {currentTime}
            </div>
            <div>
                sizeFile:<br />
                {sizeFile}MB
            </div>

            <div>
                nameFile:<br />
                {nameFile}
            </div>
            <div>
                duration:<br />
                {durationFile}
            </div>
        </div>
        </div>

    );
}

export default Video;
