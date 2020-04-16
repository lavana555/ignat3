import {Dispatch} from "redux";
import {apiShopTable, ProductType} from "../dal/apiShopTable";


const GET_PRODUCTS = 'app/shopTableReducer/GET_PRODUCTS';
const ADD_PRODUCT = 'app/shopTableReducer/ADD_PRODUCT';
const DELETE_PRODUCT = 'app/shopTableReducer/DELETE_PRODUCT';
const UPDATE_PRODUCT = 'app/shopTableReducer/UPDATE_PRODUCT';
const GET_PRODUCT_COUNT = 'app/shopTableReducer/GET_PRODUCT_COUNT';
const SET_PRODUCT_PAGE = 'app/shopTableReducer/SET_PRODUCT_PAGE';
const FILTER_DATA = "SearchReducer/FILTER_DATA";


const initialState = {
    products: [] as Array<ProductType>,
    productTotalCount: 0 as number,
    currentPage: 1 as number,
    pageCount: 5 as number
};

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
        case  GET_PRODUCT_COUNT:
            return {
                ...state,
                productTotalCount: action.productCount
            };
        case  SET_PRODUCT_PAGE:
            return {
                ...state,
                currentPage: action.page
            };
        case FILTER_DATA:
            return {
                ...state,
                products: state.products.filter(p => {
                    return p.productName.toLowerCase().includes(action.value)
                })
            };
        default:
            return state
    }
}

type shopTableActionType = GetProductsActionType | AddProductActionType | DeleteProductActionType|UpdateProductActionType
| setProductTotalCountType | setCurrentPageType | FilterSuccess

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
const setProductTotalCount = (productCount: number): setProductTotalCountType => ({type: GET_PRODUCT_COUNT, productCount});
type setProductTotalCountType ={
    type: typeof GET_PRODUCT_COUNT
    productCount: number
}
const setCurrentPage = (page:number): setCurrentPageType => ({type: SET_PRODUCT_PAGE, page});
type setCurrentPageType ={
    type: typeof SET_PRODUCT_PAGE
    page:number
}
// export const requestUsers = (page, pageSize) => async (dispatch) => {
//     dispatch(setCurrentPage(page));
//     let data = await usersAPI.getUsers(page, pageSize)
//     dispatch(setUsers(data.items));
//     dispatch(setTotalUsersCount(data.totalCount))
//
// };

export const getProducts = (page: number, pageCount: number) => async (dispatch: Dispatch) => {
    debugger
    dispatch(setCurrentPage(page));
    let data = await apiShopTable.getProducts(page, pageCount);
    dispatch(getProductsSuccess(data.products))
    dispatch(setProductTotalCount(data.productTotalCount))
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



export const filterSuccess = (value: string): FilterSuccess => ({type: FILTER_DATA, value});
type FilterSuccess = {
    type: typeof FILTER_DATA
    value: string
}
export const findProductC = (value: string) => async (dispatch: Dispatch) => {
    dispatch(filterSuccess(value))
};