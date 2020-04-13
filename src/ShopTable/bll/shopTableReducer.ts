import {Dispatch} from "redux";
import {apiShopTable, ProductType} from "../dal/apiShopTable";

const GET_PRODUCTS = 'app/shopTableReducer/GET_PRODUCTS';
const ADD_PRODUCT = 'app/shopTableReducer/ADD_PRODUCT';
const DELETE_PRODUCT = 'app/shopTableReducer/DELETE_PRODUCT';
const UPDATE_PRODUCT = 'app/shopTableReducer/UPDATE_PRODUCT';


const initialState = {
    products: [] as Array<ProductType>
}
type InitialStateType = typeof initialState

export const shopTableReducer = (state = initialState, action: shopTableActionType): InitialStateType => {
    switch (action.type) {
        case  GET_PRODUCTS:
            return {
                ...state,
                products: action.products
            };
        case  ADD_PRODUCT:
            return {
                ...state,
                products: [action.newProduct, ...state.products]
            };
        case  DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product=>product.id!==action.id)
            };
            case  UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map(product=>  {
                    if(product.id===action.id){return {...product,productName:action.productName,price:action.price}}
                    else {return product}
                }
                )
            };
        default:
            return state
    }
}

type shopTableActionType = GetProductsActionType | AddProductActionType | DeleteProductActionType|UpdateProductActionType

type GetProductsActionType = {
    type: typeof GET_PRODUCTS
    products: Array<ProductType>
}
const getProductsSuccess = (products: Array<ProductType>) => ({type: GET_PRODUCTS, products});
type AddProductActionType = {
    type: typeof ADD_PRODUCT
    newProduct: ProductType
}
const addProductSuccess = (newProduct: ProductType): AddProductActionType => ({type: ADD_PRODUCT, newProduct});
type DeleteProductActionType = {
    type: typeof DELETE_PRODUCT
    id: string
}
const deleteProductSuccess = (id: string): DeleteProductActionType => ({type: DELETE_PRODUCT, id});
type UpdateProductActionType = {
    type: typeof UPDATE_PRODUCT
    id: string
    productName:string
    price:number
}
const updateProductSuccess = (productName:string,price:number,id: string): UpdateProductActionType => ({type: UPDATE_PRODUCT, id,productName,price});

export const getProducts = () => async (dispatch: Dispatch) => {
    let products = await apiShopTable.getProducts();
    dispatch(getProductsSuccess(products))
};
export const addProduct = (productName: string, price: number, productType: string) => async (dispatch: Dispatch) => {
    let newProduct = await apiShopTable.addProduct(productName, price, productType);
    dispatch(addProductSuccess(newProduct))
};
export const delProduct = (id: string) => async (dispatch: Dispatch) => {
    let response = await apiShopTable.delProduct(id);
    if (response.success) {
        dispatch(deleteProductSuccess(id))
    }
};
export const updateProduct = (productName:string,price:number,id: string) => async (dispatch: Dispatch) => {
    let response = await apiShopTable.updateProduct(productName,price,id)
    if (response.success) {
        dispatch(updateProductSuccess(productName,price,id))
    }
};
