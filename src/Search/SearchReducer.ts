import {apiShopTable, ProductType} from "../ShopTable/dal/apiShopTable";
import {Dispatch} from "redux";

export const FILTER_DATA = "SearchReducer/FILTER_DATA";
//export const GET_PRODUCTS = "SearchReducer/GET_PRODUCTS";

type InitialStateType = {
    products: ProductType[]
}
const initialState: InitialStateType = {
    products: [],
};


const searchReducer = (state = initialState, action: SearchReducerActionType) => {
    debugger
    switch (action.type) {
        // case GET_PRODUCTS:
        //     return {
        //         ...state,
        //         products: action.products
        //     };
        case FILTER_DATA:
            return {
                ...state,
                products: state.products.filter(p => {
                    return p.productName.toLowerCase().includes(action.value)
                })
            };
        default: {
            return state;
        }
    }

};


type FilterSuccess = {
    type: typeof FILTER_DATA
    value: string
}
// type GetProductsSuccess = {
//     type: typeof GET_PRODUCTS
//     products: ProductType[]
// }
type SearchReducerActionType = FilterSuccess
    // | GetProductsSuccess

export const filterSuccess = (value: string): FilterSuccess => ({type: FILTER_DATA, value});
// const getProductsSuccess = (products: ProductType[]): GetProductsSuccess => ({type: GET_PRODUCTS, products});

// export const getProductC = () => async (dispatch: Dispatch) => {
//     let products = await apiShopTable.getProducts();
//     dispatch(getProductsSuccess(products));
// };

export const findProductC = (value: string) => async (dispatch: Dispatch) => {
    dispatch(filterSuccess(value))
};


export default searchReducer;