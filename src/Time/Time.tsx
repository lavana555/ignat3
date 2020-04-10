import React, {ChangeEvent, FC, useState} from 'react';
import moment from "moment"
import TimePicker from "rc-time-picker";
import 'rc-time-picker/assets/index.css';
import Timetracker from "./TimeTracker/timetracker";


type PropsType = {}

const Time: FC<PropsType> = (props) => {
    let [input1Value, setInput1Value] = useState(moment());
    let [input2Value, setInput2Value] = useState(moment());
    let newTime = moment.utc(input1Value.diff(input2Value));
    let now = moment().format('HH:mm:ss');
    let showInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
    };

    return (
        <div>
            <div>
                Time
                {now}
            </div>
            <input type={'time'} onChange={showInputValue}/>
            <div>



                <TimePicker defaultValue={input1Value} format={"HH:mm"} showSecond={false} onChange={setInput1Value}/>---

                <TimePicker defaultValue={input2Value} format={"HH:mm"} showSecond={false} onChange={setInput2Value}/>===

                <TimePicker value={newTime} format={"HH:mm"} showSecond={false} showMinute={false} showHour={false}/>

            </div>
            <Timetracker />
        </div>
    );
}

export default Time