import {Dispatch} from "redux";
import {apiShopTable, ProductType} from "../dal/apiShopTable";

const GET_PRODUCTS  = 'app/shopTableReducer/GET_PRODUCTS';


const initialState = {
    products: [
    ] as Array<ProductType>
}
type InitialStateType = typeof initialState

export const shopTableReducer = (state = initialState, action: recPassActionType): InitialStateType => {
    switch (action.type) {
        case  GET_PRODUCTS:
            return {...state,
            products: action.products};
        default:
            return state
    }
}

type recPassActionType = GetProductsActionType

type GetProductsActionType = {
    type: typeof GET_PRODUCTS
    products:Array<ProductType>
}
const getProductsSuccess = (products:any)=>({type:GET_PRODUCTS,products});

export const getProducts = ()=>async (dispatch:Dispatch)=>{
   let products = await  apiShopTable.getProducts();
   dispatch(getProductsSuccess(products))
};
