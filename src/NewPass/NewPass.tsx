import React, {ChangeEvent, Component} from 'react';

type OwnPropsType = {
    token: string
    success: boolean
    loading: boolean
    error: string
    disable:boolean
    addNewPass: (token: string, password: string) => void
    deleteErrorMessage: () => void
}
type PropsType = OwnPropsType

type StateType = {
    password: string
    password2: string
    errorPass: boolean
}

class NewPass extends Component<PropsType, StateType> {

    state = {
        password: "",
        password2: "",
        errorPass: false
    }
    changePassword = (e: ChangeEvent<HTMLInputElement>) => {
        let passwordValue = e.currentTarget.value;
        this.setState({password: passwordValue,errorPass:false});

    }
    changePassword2 = (e: ChangeEvent<HTMLInputElement>) => {
        let passwordValue = e.currentTarget.value;
        this.setState({password2: passwordValue,errorPass:false});

    }
    addNewPass = () => {
        if (this.state.password === this.state.password2) {
            let token = this.props.token;
            this.props.addNewPass(token, this.state.password)
            this.props.deleteErrorMessage()
        } else {
            this.setState({errorPass:true})
        }
    }

    render() {
        return (
            <div>
                {!this.props.success ?
                    <div>
                        <div>New Password</div>
                        <div>
                            <div> <input type={"password"} placeholder={'new password'} value={this.state.password}
                                   onChange={this.changePassword}/></div>
                                <div><input type={"password"} placeholder={'new password'} value={this.state.password2}
                                   onChange={this.changePassword2}/></div>
                            {this.state.errorPass ? <div style={{color: "red"}}>You entered two different passwords. Please try again</div> : null}
                            {this.props.loading ? <div style={{color: "red"}}>Loading...</div> : null}
                            {this.props.error !== "" ? <div style={{color: "red"}}>{this.props.error}</div> : null}
                        </div>
                        <div>
                            <button disabled={this.props.disable} onClick={this.addNewPass}>Change Password</button>
                        </div>
                    </div>
                    : <div>Password Changed</div>
                }
            </div>
        );
    }
}

export default NewPass