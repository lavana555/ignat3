import React, {ChangeEvent, useRef, useState} from 'react';
import s from './FilePage.module.css'
import Slider from "../Video/slider";


const FilePage = () => {
    const inputEl = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File | null>(null);
    const [fileURL, setFileURL] = useState();
    const onButtonClick = (e: any) => {
        if (inputEl && inputEl.current) inputEl.current.click()
    };

    const onAddFile = (e: ChangeEvent<HTMLInputElement>) => {
        const newFile = e.target.files && e.target.files[0];
        if (newFile) {
            setFile(newFile);
            setFileURL(URL.createObjectURL(newFile))
        }
        console.log(newFile)
    }

    let showElement = false;
    let audioRef = useRef<HTMLAudioElement>(null);
    let inputRef = useRef<HTMLInputElement>(null);
    let [audio1, setAudio1] = useState<HTMLAudioElement | null>(null);
    const [audio1URL, setAudio1URL] = useState();
    const [playAudio, setPlayAudio] = useState(true)
    const [volume, setVolume] = useState(1)
    const onAddVideo = (e: ChangeEvent<HTMLInputElement>) => {
        const newFile = e.target.files && e.target.files[0];
        if (newFile) {
            // @ts-ignore
            setAudio1(newFile);
            setAudio1URL(URL.createObjectURL(newFile))
        }
    }

    const onPlayAudio = () => {
        if (audio1URL) {
            audioRef && audioRef.current && audioRef.current.play();
            setPlayAudio(false)
        }
    }
    const onStopAudio = () => {
        audioRef && audioRef.current && audioRef.current.pause();
        setPlayAudio(true)
    }

    const plusVol = () => {
        if (audio1URL && audioRef.current && audioRef.current.volume < 0.9) {
            setVolume(audioRef.current.volume += 0.1)
        } else {
            audioRef && audioRef.current && setVolume(audioRef.current.volume = 1);
        }
    }
    const plusSpeed = () => {
        if (audio1URL && audioRef.current && audioRef.current.playbackRate < 3) {
            audioRef.current.playbackRate += 0.1
        } else {
            audioRef && audioRef.current && (audioRef.current.playbackRate = 3);
        }
    }
    const minusVol = () => {
        if (audio1URL && audioRef.current && audioRef.current.volume > 0) {
            setVolume(audioRef.current.volume -= 0.1)
        } else {
            audioRef && audioRef.current && setVolume(audioRef.current.volume = 0);
        }
    }
    const minusSpeed = () => {
        if (audio1URL && audioRef.current && audioRef.current.playbackRate > 0.2) {
            audioRef.current.playbackRate -= 0.1
        } else {
            audioRef && audioRef.current && (audioRef.current.playbackRate = 0.1);
        }
    }
    const ChangedVolume = (value:number) => {
        if (audioRef && audioRef.current) setVolume(audioRef.current.volume = value)
    }

    let size = file && Math.floor(file.size / 1024);
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <input style={{display: "none"}} type={'file'} accept={'image/*'} ref={inputEl} onChange={onAddFile}/>
            <button onClick={onButtonClick}>Add</button>
            {file && <div>{file.name}</div>}
            {file && <div>{size}KB</div>}
            <img style={{width: "200px"}} src={fileURL}/>


            <div className={s.wrapper}>
                <div className={s.wrapper}>
                    <input type={'file'} ref={inputRef} accept={'audio/*'} onChange={onAddVideo}/>
                    {playAudio && <div className={s.soundBtn} onClick={onPlayAudio}>Play</div>}
                    {!playAudio && <div className={s.soundBtn} onClick={onStopAudio}>Stop</div>}
                </div>
                <div>
                    <button onClick={plusVol}>[+]Vol</button>
                    <button onClick={minusVol}>[-]Vol</button>
                    <button onClick={plusSpeed}>[+]Speed</button>
                    <button onClick={minusSpeed}>[-]Speed</button>
                </div>
                <Slider volume={volume} ChangedVolume={ChangedVolume}/>
                <audio ref={audioRef} controls={false} src={audio1URL}/>
            </div>
        </div>);
};

export default FilePage;