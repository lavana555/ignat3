import React, {ChangeEvent} from 'react';
import classes from './Registration.module.css'
import {connect} from "react-redux";
import {addUserTC} from "./regInReducer";
import {Redirect} from "react-router";
import {errorMessage, errorMessageStatus, loadingStatus, statusSuccess} from "./booleanReducer/selector";



type MapStateType={
    errorMessage: string,
    errorStatus:boolean
    loading: boolean,
    success:boolean
}

type MapDispatchType={
    addUserTC:(email:string,pas:string)=>void
}

type StateType={
    email: string,
    pas1: string,
    pas2: string,
    errorPas: boolean,
    errorMail: boolean
}

type PropsType= MapStateType &  MapDispatchType

class Registration extends React.Component<PropsType, StateType> {

    state = {
        email: '',
        pas1: '',
        pas2: '',
        errorPas: false,
        errorMail: false
    }


    ChangedEmil = (e:ChangeEvent<HTMLInputElement>) => {
        // let newEmail=
        this.setState({
            email: e.currentTarget.value,
            errorMail:false
        })

    }

    ChangedPassOne = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            pas1: e.currentTarget.value,
            errorPas:false
        })
    }

    ChangedPassTwo = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            pas2: e.currentTarget.value,
            errorPas:false
        })
    }

//     DSAINBR=()=>{
//
// }

    addRegister = () => {
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (this.state.pas1 !== this.state.pas2) {
            this.setState({
                errorPas: !this.state.errorPas
            })
        } else if (reg.test(this.state.email) === false) {
            this.setState({
                errorMail: !this.state.errorMail
            })

        } else {
            this.props.addUserTC(this.state.email, this.state.pas1)
        }


    }

    render = () => {
//debugger

        if (this.props.success)return <Redirect to={'/login'}/>
        return (
            <div className={classes.register}>
                register
                mail: <input onChange={this.ChangedEmil}/>
                password: <input onChange={this.ChangedPassOne}/>
                password: <input onChange={this.ChangedPassTwo}/>
                {this.state.errorPas ?
                    <div style={{color: "red"}}>You entered two different passwords. Please try again</div> : null}
                {this.state.errorMail ?
                    <div style={{color: "red"}}>You entered incorrect mail. Please try again</div> : null}
                {this.props.loading ? <div style={{color: "red"}}>Loading...</div> : null}
                {this.props.errorStatus?<div style={{color: "red"}}>{this.props.errorMessage}</div> : null}
                <div className={classes.btn} onClick={this.addRegister}>Register</div>

            </div>

        );
    }
}


const mapStateToProps = (state:any) => {
  // debugger

    return {


        loading:loadingStatus(state.BL.booleans),
        errorMessage:errorMessage(state.BL.booleans),
        errorStatus:errorMessageStatus(state.BL.booleans),
        success:statusSuccess(state.BL.booleans)

    }
}


export default connect(mapStateToProps, {addUserTC})(Registration)