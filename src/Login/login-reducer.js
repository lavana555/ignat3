
import {apiLogin} from "./apiLogin";
import {Dispatch} from "redux";

import {api} from "../api";
import {errorAlertSuccess, loadAC, successAC} from "../booleanReducer/booleanReducer";

export const SET_LOGIN_DATA = "logInReducer/SET_LOGIN_DATA";
export const REMEMBER_ME = "logInReducer/REMEMBER_ME";
export const LOADING_STATUS="logInReducer/LOADING_STATUS"
export const ERROR_MESSAGE="logInReducer/ERROR_MESSAGE"
export const TOKEN="logInReducer/TOKEN"

const initialState = {
    // email: '',
    // password: '',
    // rememberMe: false,
    name:''
};


const logInReducer = (state = initialState, action) => {
    switch (action.type) {
        // case SET_LOGIN_DATA: {
        //     return {
        //         ...state,
        //         ...action.userData
        //     }
        // }
        // case REMEMBER_ME: {
        //     return {
        //         ...state,
        //         ...action.rememberMe
        //     }
        // }
        case TOKEN:{
            return {
                ...state,
                name: action.name
            }
        }
        default: {
            return state;
        }
    }

};


const setAuthUserDataAC = (login, password, rememberMe) =>
    ({type: SET_LOGIN_DATA, userData: {login, password, rememberMe}});

//
// export const loginTC = (email, password, rememberMe) => (dispatch) => {
//     apiLogin.addLogin(email, password, rememberMe).then(res => {
//         let resp = res.data.success;
//         dispatch(setAuthUserDataAC(resp))
//     })
//
// };


export const loginTC = (email, password, rememberMe) => async (dispatch) => {

    try {
        dispatch(loadAC(true))
        let res = await apiLogin.addLogin(email, password, rememberMe)
        let token=res.data.token
        dispatch(loadAC(false))
        let newres=await apiLogin.authMe(token)
        let success = newres.data.success
        let name=newres.data.name
        dispatch(successAC(success))
        dispatch(TokenAC(name))
    } catch (e) {

        dispatch(loadAC(false))
        dispatch(errorAlertSuccess(e.response.data.error))


    }
}

const TokenAC=(name)=>({type:TOKEN,name})

// const loadAC = (loading)=>({type: LOADING_STATUS, loading})
// // type LoadActionType={
// //     type:typeof LOADING_STATUS,
// //     loading:boolean
// // }
//
// const errorAlertSuccess=(error)=>({type : ERROR_MESSAGE, error})
// // type ErrorAlertSuccessActionType={
// //     type:typeof ERROR_MESSAGE,
// //     error:string
// //
// // }




export default logInReducer;