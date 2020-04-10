import React from 'react';
import {useSelector} from "react-redux";

// import classes from './Users.module.css'


function AuthMe(props) {

    const name = useSelector(state => state.logIn.name);

    return (

        <div>
            name:
            <div>{name}</div>
            <div style={{color: "green"}}>successful</div>
        </div>

    );
}

export default AuthMe;
