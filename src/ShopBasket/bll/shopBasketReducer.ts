import {Dispatch} from "redux";
import { ProductType } from "../../ShopTable/dal/apiShopTable";

const ADD_PRODUCT = 'app/shopBasketReducer/ADD_PRODUCT';
const DELETE_PRODUCT = 'app/shopBasketReducer/DELETE_PRODUCT';



const initialState = {
    products: [] as Array<ProductType>
}
type InitialStateType = typeof initialState

export const shopBasketReducer = (state = initialState, action: shopTableActionType): InitialStateType => {
    switch (action.type) {
        case  ADD_PRODUCT:
            return {
                ...state,
                products: [action.product, ...state.products]
            };
        case  DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product=>product.id!==action.id)
            };
        default:
            return state
    }
}

type shopTableActionType =  AddProductActionType | DeleteProductActionType

type AddProductActionType = {
    type: typeof ADD_PRODUCT
    product: ProductType
}
const addProductSuccess = (product: ProductType): AddProductActionType => ({type: ADD_PRODUCT, product});
type DeleteProductActionType = {
    type: typeof DELETE_PRODUCT
    id: string
}
const deleteProductSuccess = (id: string): DeleteProductActionType => ({type: DELETE_PRODUCT, id});


export const addToBasket = (product:ProductType) =>  (dispatch: Dispatch) => {
    dispatch(addProductSuccess(product))
};
export const delFromBasket = (id: string) => (dispatch: Dispatch) => {
        dispatch(deleteProductSuccess(id))
};

