import React, {Component} from 'react';
import {connect} from "react-redux";


type MapStateType = {

}
// type MapDispatchType = {
//     loginTC: (email: string, password: string, rememberMe: boolean) => void
//     // rememberMeAC: (rememberMe: boolean)=>void
// }
// type PropsType = MapDispatchType & MapStateType;


class Search extends Component<PropsType> {


    render() {
        return <div>

        </div>
    }
};


const mstp = (state: any): MapStateType => ({
    products:
});


export default connect(mstp, {})(Search)