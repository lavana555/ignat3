import React, {FC, useState} from 'react';

type GradientColorsType = {
    color: string
    percent: number
}
const Color: FC<any> = (props) => {

    const [color, setColor] = useState('#212bde');
    const [deg, setDeg] = useState(90);
    const [gradientColors, setGradientColors] = useState<Array<GradientColorsType>>(
        [{color: '#000000', percent: 15}, {color: '#EECFBA', percent: 35},
            {color: '#C5DDE8', percent: 65}, {color: '#00ff00', percent: 90}]);
    const gradientValue = gradientColors.reduce((sum, inp) =>
        `${sum},${inp.color} ${inp.percent}%`, '');
    const inputColors = gradientColors.map((inpObj, index) => (
        <div key={index}>
            <input type={'color'} value={inpObj.color}
                   onChange={e => setGradientColors(gradientColors.map((inpObj, inpIndex) =>
                       index === inpIndex ? {...inpObj, color: e.currentTarget.value} : inpObj))
                   }
            />
            <input type={'number'} value={inpObj.percent}
                   onChange={e => setGradientColors(gradientColors.map((inpObj, inpIndex) =>
                       index === inpIndex ? {...inpObj, percent: Number(e.currentTarget.value)} : inpObj))
                   }
            />
            <button onClick={() => setGradientColors(gradientColors.filter((inpObj, inpIndex) =>
                inpIndex !== index))}
            >
                Delete
            </button>
        </div>
    ));
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <input type={"color"} value={color} onChange={e => setColor(e.currentTarget.value)}/>
            <div style={{height: "100px", width: "100px", backgroundColor: color}}/>
            <div style={{
                height: '200px',
                width: '500px',
                background: `linear-gradient(${deg}deg ${gradientValue})`
            }}/>
            <input type={'number'} value={deg} onChange={e => setDeg(Number(e.currentTarget.value))}/>
            {inputColors}
            <button onClick={()=>setGradientColors([...gradientColors,{color: '#000000', percent: 100}])}>
                Add
            </button>
        </div>
    );
}

export default Color
