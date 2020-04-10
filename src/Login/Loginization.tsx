import React, {Component} from 'react';
import {connect} from "react-redux";
import {loginTC} from "./login-reducer";
import s from "./Loginization.module.css"
import {errorMessage, loadingStatus, statusSuccess} from "../booleanReducer/selector";
import {Redirect} from "react-router";


type MapStateType = {
    error: string;
    loading: boolean,
    success:boolean,
    name:string
}
type MapDispatchType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
    // rememberMeAC: (rememberMe: boolean)=>void
}
type PropsType = MapDispatchType & MapStateType;


class Loginization extends Component<PropsType> {
    state = {
        email: '',
        password: '',
        rememberMe: false
    };


    onEmailChange = (e: any) => {
        this.setState({email: e.currentTarget.value})
    };

    onPasswordChange = (e: any) => {
        this.setState({password: e.currentTarget.value})
    };

    rememberMe = (e: any) => {
        this.setState({rememberMe: e.currentTarget.checked})
        //this.props.rememberMeAC(e.currentTurget.checked)
    };

    addLogin = () => {
        this.props.loginTC(this.state.email, this.state.password, this.state.rememberMe)
    };


    render() {

        if (this.props.success)return <Redirect to={'/authme'}/>

        return <div className={s.login}>

            <h1>Login</h1>
            <span>Имя пользователя или e-mail </span>
            <input
                value={this.state.email}
                onChange={this.onEmailChange}
                placeholder='Enter your username'/>
            <span>Пароль </span>
            <input
                onChange={this.onPasswordChange}
                value={this.state.password}
                type='password'
                placeholder='Enter your password'/>
            <input type='checkbox' checked={this.state.rememberMe}
                   onChange={this.rememberMe}/><span>Запомнить меня</span>
            <button onClick={this.addLogin}>Войти</button>
            {this.props.loading ? <div style={{color: "red"}}>Loading...</div> : null}
            {this.props.error!==''?<div style={{color: "red"}}>{this.props.error}</div> : null}
            <div>{this.props.name}</div>
        </div>
    }
};


const mstp = (state: any): MapStateType => ({
    // email: state.logIn.email,
    // password: state.logIn.password,
    // rememberMe: state.logIn.rememberMe,
    loading:loadingStatus(state.BL.booleans),
    error:errorMessage(state.BL.booleans),
    success:statusSuccess(state.BL.booleans),
    name:state.logIn.name

});
export default connect(mstp, {loginTC})(Loginization)