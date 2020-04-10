import React, {Component, ChangeEvent} from 'react';
import { Link } from 'react-router-dom';

type PropsType = {
    sendMail: (email: string) => void
    success: boolean
    error: string
    deleteErrorMessage:()=>void
    loading:boolean
    disable:boolean
}
type StateType = {
    email:string
}

class RecoveryPass extends Component<PropsType,StateType> {
    state = {
        email: "",
    }
    emailAdd = (e: ChangeEvent<HTMLInputElement>) => {
        let emailValue = e.currentTarget.value;
        this.setState({email: emailValue});
        this.props.deleteErrorMessage()
    }
    sendMail = () => {
     this.props.sendMail(this.state.email)
    }

    render() {
        return (
            <div>
                {!this.props.success ?
                    <div>
                        <div>Forgot</div>
                        <div>
                            <input placeholder={'enter your email'} value={this.state.email} onChange={this.emailAdd}/>
                            {this.props.loading?<div style={{color:"red"}}>Loading...</div>:null}
                            {this.props.error!==""?<div style={{color:"red"}}>{this.props.error}</div>:null}
                        </div>
                        <div>
                            <button disabled={this.props.disable} onClick={this.sendMail}>Send email</button>
                        </div>
                        <Link to="/login">Sign in</Link>
                    </div>
                    : <div>Check your email</div>
                }
            </div>
        );
    }
}

export default RecoveryPass