import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {regInReducer} from "./regInReducer";
import {recPassReducer} from "./RecoveryPass/bll/recPassReducer";
import {newPassReducer} from "./NewPass/bll/newPassReducer";
import logInReducer from "./Login/login-reducer";
import {UserReducer} from "./Users/UsersReducers";
import {booleanReducer} from "./booleanReducer/booleanReducer";
import searchReducer from "./Search/SearchReducer";

const rootReducer = combineReducers({
    logIn: logInReducer,
    regIn: regInReducer,
    recPass: recPassReducer,
    newPass: newPassReducer,
    US:UserReducer,
    BL:booleanReducer,
    search: searchReducer
    // profile:profileReducer,

})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export default store