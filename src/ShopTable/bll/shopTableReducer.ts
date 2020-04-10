import {Dispatch} from "redux";

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

        default:
            return state
    }
}
//type recPassActionType =
// RecoveryPassSuccessActionType
// | ErrorAlertActionType
