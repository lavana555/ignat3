//export  const GET_USERS='GETUSERS'
import {Dispatch} from "redux";

export const LOADING_STATUS = 'LOADINGSTATUS'
export const ERROR_MESSAGE = 'ERROR_MESSAGE'
export const SUCCESS_STATUS = 'SUCCESS_STATUS'
export const SUCCESS_DISABLE = 'SUCCUESS_DISABLE'
export const DELETE_ERROR = 'DELETE_ERROR'

const initialState = {
    booleans: [
        {name: 'LOADING', value: false, message: ''},
        {name: "ERROR", value: false, message: ''},
        {name: "SUCCESS", value: false, message: ''},
        // {name: "DISABLE", value: false, message: ''},
    ]
}


export const booleanReducer = (state = initialState, action) => {

    switch (action.type) {
        case SUCCESS_STATUS: {
            return {
                ...state,
                booleans: state.booleans.map(b => (b.name === 'SUCCESS') ? {...b, value: action.success} : b)
            }
        }
        case LOADING_STATUS: {
            return {
                ...state,
                booleans: state.booleans.map(b => (b.name === 'LOADING') ? {...b, value: action.loading} : b)
            }

        }

        case ERROR_MESSAGE: {
            return {
                ...state,
                booleans: state.booleans.map(b => (b.name = 'ERROR') ? {...b, value: true, message: action.message} : b)
            }
        }
        // case SUCCESS_DISABLE : {
        //
        //     return {
        //         ...state,
        //         booleans: state.booleans.map(b=>(b.name==='DISABLE')?{...b,value:action.value}:b)
        //     }
        // }
        // case DELETE_ERROR : {
        //
        //     return {
        //         ...state,
        //         booleans: state.booleans.map(b=>(b.name==='ERROR')?{...b,message:''}:b)
        //     }
        // }
        default: {
            return state;
        }

    }
}






export const successAC = (success) => ({type: SUCCESS_STATUS, success})


export const errorAlertSuccess = (message) => ({type: ERROR_MESSAGE, message})


export const loadAC = (loading) => ({type: LOADING_STATUS, loading})



// const initialState ={
//     booleans :[
//     name: '',
// value: false,
// data: {}
// ]
// }
//
//
//
//
// export const booleanReducer=(state=initialState,action)=>{
//     switch (action.type) {
//         case BOOLEAN_SET_VALUE :{
//             return
//         }
//     }
// }
//
//
//
//
// export const booleanSetValue=(booleans)=>({type:BOOLEAN_SET_VALUE,booleans})


//
//  export const disableStatusChanging =(disable)=> ({type: SUCCESS_DISABLE, disable})


// export const deleteErrorMessageSuccess =()=> ({type: DELETE_ERROR})





