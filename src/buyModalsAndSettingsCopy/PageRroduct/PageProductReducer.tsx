import {Dispatch} from "redux";
import { ProductType } from "../../ShopTable/dal/apiShopTable";

const ADD_PRODUCT = 'app/shopBasketReducer/ADD_PRODUCT';




const initialState = {
    products: [] as Array<ProductType>
}
type InitialStateType = typeof initialState

export const pageRroductReducer = (state = initialState, action: shopTableActionType): InitialStateType => {
    switch (action.type) {
        case  ADD_PRODUCT:
            return {
                ...state,
                products: [action.product]
            };

        default:
            return state
    }
}

type shopTableActionType =  AddProductActionType

type AddProductActionType = {
    type: typeof ADD_PRODUCT
    product: ProductType
}
const addProductSuccess = (product: ProductType): AddProductActionType => ({type: ADD_PRODUCT, product});




export const addToPageProduct = (product:ProductType) =>  (dispatch: Dispatch) => {
    dispatch(addProductSuccess(product))
};


