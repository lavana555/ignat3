import React, {Component} from 'react';
import NewPass from "./NewPass";
import {deleteErrorMessage, addNewPass} from "./bll/newPassReducer";
import {connect} from "react-redux";
import {RouteComponentProps} from "react-router";
import {withRouter} from "react-router-dom";
import {AppStateType} from "../store";
import {
    //disableStatus,
    errorMessage, loadingStatus, statusSuccess} from "../booleanReducer/selector";

type MatchParams = {
    token: string
}
type MapStateType = {
    success: boolean
    loading: boolean
    error: string
    disable:boolean
}
type MapDispatchType = {
    addNewPass: (token: string, password: string) => void
    deleteErrorMessage: () => void
}
type PropsType = MapDispatchType & MapStateType & RouteComponentProps<MatchParams>

class NewPassContainer extends Component<PropsType> {
    render() {
        return (
            <div>
                <NewPass token={this.props.match.params.token}
                         disable={this.props.disable}
                         success={this.props.success}
                         loading={this.props.loading}
                         error={this.props.error}
                         addNewPass={this.props.addNewPass}
                         deleteErrorMessage={this.props.deleteErrorMessage}/>
            </div>
        );
    }
}

const mstp = (state: AppStateType): MapStateType => ({
    // success: state.newPass.success,
    // error: state.newPass.error,
    // loading: state.newPass.loading,
    disable:state.newPass.disable,
    //disable: disableStatus(state.BL.booleans),


    loading:loadingStatus(state.BL.booleans),
    error:errorMessage(state.BL.booleans),
    success:statusSuccess(state.BL.booleans),

})


let WithRouterNewPassContainer = withRouter(NewPassContainer);
export default connect(mstp, {addNewPass, deleteErrorMessage})(WithRouterNewPassContainer)