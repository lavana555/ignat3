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


    const audioRef = useRef<HTMLInputElement>(null);
    let [audio, setAudio] = useState<HTMLAudioElement|null >(null);
    const [audioURL, setAudioURL] = useState();
    const [play,setPlay]=useState(true)
    const onAddMusic= (e: ChangeEvent<HTMLInputElement>) => {
        const newFile = e.target.files && e.target.files[0];
        if (newFile) {
            // @ts-ignore
            setAudio(newFile);
            setAudioURL(URL.createObjectURL(newFile))
        }
    }

    const onPlay =()=> {

        if(audioURL)
        {audio&&audio.play();
        setPlay(false)}else {
            setPlay(true)
        }
    }
    const onStop =()=> {
        if(audioURL){audio&&audio.pause();
        setPlay(true)}
    }
    return (
        <div>
            <input type={'file'} accept={'image/*'} ref={inputEl} onChange={onAddFile}/>
            <button onClick={onButtonClick}>Add</button>
            <img src={fileURL}/>
            <div className={s.wrapper}>
                <input type={'file'} accept={'audio/*'} ref={audioRef} onChange={onAddMusic}/>
                {play&&<div className={s.soundBtn} onClick={onPlay}>Play</div>}
                {!play&&<div className={s.soundBtn} onClick={onStop}>Stop</div>}
                <audio ref={(ref) => {audio = ref}} src={audioURL}/>
            </div>
        </div>
    );
};

export default FilePage;