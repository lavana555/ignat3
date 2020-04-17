import React, {useRef} from 'react';


const FilePage = () => {
    const inputEl = useRef<HTMLInputElement>(null);
    const onButtonClick = () => {
        if(inputEl && inputEl.current) {
            inputEl.current.click()
        }
    };
    return (
        <div>
            <input type={'file'} ref={inputEl}/>
            <button onClick={onButtonClick}>Add</button>
        </div>
    );
};

export default FilePage;