import {Dispatch} from "redux";
import {apiShopTable} from "../dal/apiShopTable";

const GET_PRODUCTS  = 'app/shopTableReducer/GET_PRODUCTS';

export type ProductType = {
    product: string
    price: number
}
const initialState = {
    products: [
        {product: 'car', price: 40000},
        {product: 'boat', price: 80000},
        {product: 'Xiaomi Mi 10 Pro', price: 1000},
        {product: 'bike', price: 2000}
    ] as Array<ProductType>
}
type InitialStateType = typeof initialState

export const shopTableReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case  GET_PRODUCTS:
            return {...state,
            products: action.products}
        default:
            return state
    }
}
//type recPassActionType =
// RecoveryPassSuccessActionType

const getProductsSuccess = (products:any)=>({type:GET_PRODUCTS,products});
export const getProducts = ()=>async (dispatch:Dispatch)=>{
   let products =  apiShopTable.getProducts();
   dispatch(getProductsSuccess(products))
};
