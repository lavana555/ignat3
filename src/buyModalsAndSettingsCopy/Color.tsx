import React, {FC, useEffect, useState} from 'react';
import classes from "./buyMaS.module.css";
import Modal from "./Modal";
import {useDispatch} from "react-redux";
import {getProducts} from "../ShopTable/bll/shopTableReducer";
import {addNewColorBG} from "./shopTableReducer";

type GradientColorsType = {
    color: string
    percent: number
}
const ColorSite: FC<any> = (props) => {

    const [colorbtn, setColorbtn] = useState('#212bde');
    const [colorbg,setColorbg] = useState('#de473f');


    // const dispatch = useDispatch();
    // useEffect( ()=>{dispatch(getProducts())
    // },[]);

    // const [deg, setDeg] = useState(90);
    // const [gradientColors, setGradientColors] = useState<Array<GradientColorsType>>(
    //     [{color: '#000000', percent: 15}, {color: '#EECFBA', percent: 35},
    //         {color: '#C5DDE8', percent: 65}, {color: '#00ff00', percent: 90}]);
    // const gradientValue = gradientColors.reduce((sum, inp) =>
    //     `${sum},${inp.color} ${inp.percent}%`, '');
    // const inputColors = gradientColors.map((inpObj, index) => (
    //     <div key={index}>
    //         <input type={'color'} value={inpObj.color}
    //                onChange={e => setGradientColors(gradientColors.map((inpObj, inpIndex) =>
    //                    index === inpIndex ? {...inpObj, color: e.currentTarget.value} : inpObj))
    //                }
    //         />
    //         <input type={'number'} value={inpObj.percent}
    //                onChange={e => setGradientColors(gradientColors.map((inpObj, inpIndex) =>
    //                    index === inpIndex ? {...inpObj, percent: Number(e.currentTarget.value)} : inpObj))
    //                }
    //         />
    //         <button onClick={() => setGradientColors(gradientColors.filter((inpObj, inpIndex) =>
    //             inpIndex !== index))}
    //         >
    //             Delete
    //         </button>
    //     </div>
    // ));
    const dispatch = useDispatch();

    function    onAddPColorModal () {

        dispatch(addNewColorBG(colorbg,colorbtn))
        props.onAddPColorModal()
        ;
    }

    function onNoColorModal() {
props.onNoColorModal()
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            changed button color
            <input type={"color"} value={colorbtn} onChange={e => setColorbtn(e.currentTarget.value)}/>
            changed bg color
            <input type={"color"} value={colorbg} onChange={e => setColorbg(e.currentTarget.value)}/>
            {/*<div style={{height: "100px", width: "100px", backgroundColor: color}}/>*/}
            {/*<div style={{*/}
            {/*    height: '200px',*/}
            {/*    width: '500px',*/}
            {/*    background: `linear-gradient(${deg}deg ${gradientValue})`*/}
            {/*}}/>*/}
            {/*<input type={'number'} value={deg} onChange={e => setDeg(Number(e.currentTarget.value))}/>*/}
            {/*{inputColors}*/}
            {/*<button onClick={()=>setGradientColors([...gradientColors,{color: '#000000', percent: 100}])}>*/}
            {/*    Add*/}
            {/*</button>*/}

            <div className={classes.btn} onClick={onAddPColorModal}>YES</div>
            <div className={classes.btn} onClick={onNoColorModal}>NO</div>

        </div>
    );
}

export default ColorSite
