import {Dispatch} from "redux";
import {apiShopTable} from "../ShopTable/dal/apiShopTable";





const NEW_COLOR='colorReducer/NEW_COLOR'


const initialState = {
    colorbg: '#212bde',
    colorbtn:'#000000'
}


export const colorReducer = (state = initialState, action: colorActionType) => {
    switch (action.type) {
        case  NEW_COLOR:
            return {
                ...state,
                colorbg: action.colorbg,
                colorbtn: action.colorbtn
            };

        default:
            return state
    }
}

type colorActionType = GetNewColorBGActionType

type GetNewColorBGActionType = {
    type: typeof NEW_COLOR
    colorbg:any
    colorbtn:any
}
const getNewColorBGSuccess = (colorbg:any,colorbtn:any) => ({type: NEW_COLOR, colorbg,colorbtn});



export const addNewColorBG = (colorbg:any,colorbtn:any) =>  (dispatch: Dispatch) => {

    dispatch(getNewColorBGSuccess(colorbg,colorbtn))
};



