import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {regInReducer} from "./regInReducer";
import {recPassReducer} from "./RecoveryPass/bll/recPassReducer";
import {newPassReducer} from "./NewPass/bll/newPassReducer";
import logInReducer from "./Login/login-reducer";
import {UserReducer} from "./Users/UsersReducers";
import {booleanReducer} from "./booleanReducer/booleanReducer";
import {shopTableReducer} from "./ShopTable/bll/shopTableReducer";
import {shopBasketReducer} from "./ShopBasket/bll/shopBasketReducer";
import {colorReducer} from "./buyModalsAndSettingsCopy/shopTableReducer";
import {pageRroductReducer} from "./buyModalsAndSettingsCopy/PageRroduct/PageProductReducer";


const rootReducer = combineReducers({
    logIn: logInReducer,
    regIn: regInReducer,
    recPass: recPassReducer,
    newPass: newPassReducer,
    US:UserReducer,
    BL:booleanReducer,
    shop:shopTableReducer,
    basket:shopBasketReducer,
    color:colorReducer,
    product:pageRroductReducer

    // search: searchReducer

    // profile:profileReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export default store
