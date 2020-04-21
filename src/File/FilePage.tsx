import React, {ChangeEvent, useRef, useState} from 'react';
import s from './FilePage.module.css'


const FilePage = () => {
    const inputEl = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File | null>(null);
    const [fileURL, setFileURL] = useState();
    const onButtonClick = (e: any) => {
        if (inputEl && inputEl.current) {
            inputEl.current.click()
            setFile(e.currentTarget.files[0])
        }

    };
    const onAddFile = (e: ChangeEvent<HTMLInputElement>) => {
        const newFile = e.target.files && e.target.files[0];
        if (newFile) {
            setFile(newFile);
            setFileURL(URL.createObjectURL(newFile))
        }
    }


    let audioTRef = useRef<HTMLAudioElement>(null);
    let inputRef = useRef<HTMLInputElement>(null);
    let [audio1, setAudio1] = useState<HTMLAudioElement | null>(null);
    const [audio1URL, setAudio1URL] = useState();
    const [playAudio, setPlayAudio] = useState(true)
    const onAddVideo = (e: ChangeEvent<HTMLInputElement>) => {
        const newFile = e.target.files && e.target.files[0];
        if (newFile) {
            // @ts-ignore
            setAudio1(newFile);
            setAudio1URL(URL.createObjectURL(newFile))
        }
    }

    const onPlayVid = () => {
        if (audio1URL) {
            audioTRef && audioTRef.current && audioTRef.current.play();
            setPlayAudio(false)
        }
    }
    const onStopVid = () => {
        audioTRef && audioTRef.current && audioTRef.current.pause();
        setPlayAudio(true)
    }

    const plusVolVid = () => {
        if (audio1URL && audioTRef.current && audioTRef.current.volume < 0.9) {
            audioTRef.current.volume += 0.1
        } else {
            audioTRef && audioTRef.current && (audioTRef.current.volume = 1);
        }
    }
    const minusVolVid = () => {
        console.log(audioTRef)
        if (audio1URL && audioTRef.current && audioTRef.current.volume > 0.1) {
            audioTRef.current.volume -= 0.1
        } else {
            audioTRef && audioTRef.current && (audioTRef.current.volume = 0.1);
        }
    }


    return (
        <div>
            <input type={'file'} accept={'image/*'} ref={inputEl} onChange={onAddFile}/>
            <button onClick={onButtonClick}>Add</button>
            <img src={fileURL}/>




            <div className={s.wrapper}>
                <input type={'file'} ref={inputRef} accept={'audio/*'} onChange={onAddVideo}/>
                {playAudio && <div className={s.soundBtn} onClick={onPlayVid}>Play</div>}
                {!playAudio && <div className={s.soundBtn} onClick={onStopVid}>Stop</div>}
                <button onClick={plusVolVid}>[+]Vol</button>
                <button onClick={minusVolVid}>[-]Vol</button>
                <audio ref={audioTRef} controls={true} src={audio1URL}/>
            </div>
        </div>
    );
};

export default FilePage;