import {Dispatch} from "redux";
import {apiShopTable, ProductType} from "../../ShopTable/dal/apiShopTable";

const ADD_PRODUCT = 'app/shopBasketReducer/ADD_PRODUCT';
const DELETE_PRODUCT = 'app/shopBasketReducer/DELETE_PRODUCT';
const FIND_PRODUCT = 'app/shopBasketReducer/FIND_PRODUCT';
const SORT_PRODUCT = 'app/shopBasketReducer/SORT_PRODUCT';


const initialState = {
    products: [] as Array<ProductType>,
    productTotalCount: 0 as number,
    currentPage: 1 as number,
    pageCount: 5 as number
};

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
                products: state.products.filter(product => product.id !== action.id)
            };
        case  FIND_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.productName.includes(action.product))
            };
        case  SORT_PRODUCT:
            return {
                ...state,
                products: action.index === 0 ?
                    state.products.sort((a, b) => a.price - b.price)
                    : state.products.sort((a, b) => b.price - a.price)

            };
        default:
            return state
    }
}

type shopTableActionType = AddProductActionType
    | DeleteProductActionType
    | getFilteredBasketActionType
    | addSortingBasketType

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


export const getFilteredBasket = (product: string): getFilteredBasketActionType => ({type: FIND_PRODUCT, product});
type getFilteredBasketActionType = {
    type: typeof FIND_PRODUCT
    product: string
}
export const addSortingBasket = (index: number): addSortingBasketType => ({type: SORT_PRODUCT, index});
type addSortingBasketType = {
    type: typeof SORT_PRODUCT
    index: number
}


export const addToBasket = (product: ProductType) => (dispatch: Dispatch) => {
    dispatch(addProductSuccess(product))
};
export const delFromBasket = (id: string) => (dispatch: Dispatch) => {
    dispatch(deleteProductSuccess(id))
};

