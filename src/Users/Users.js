import React from 'react';
import {getTodolistsTC} from "./UsersReducers";
import {connect} from "react-redux";
import User from "./User";
import classes from './Users.module.css'

class Users extends React.Component {


    state = {
        flag: false,


    }
    showMeUsers = () => {
        this.props.getTodolistsTC()
        this.setState({
            flag: !this.state.flag

        })
    }

    render() {
        let UsersEl = this.props.users.map(u => <User name={u.name}/>)
        return (
            <div>
                {!this.state.flag &&
                <div className={classes.btn} onClick={this.showMeUsers}>SHOW USERS</div>
                }
                {this.props.loading ? <div style={{color: "red"}}>Loading...</div> : null}
                {this.state.flag &&
                // <div className={classes.btn} onClick={this.showMeUsers}>COVER USERS</div>
                <div className={classes.container}>
                    <div className={classes.btn} onClick={this.showMeUsers}>COVER USERS</div>
                    <div className={classes.items}>
                        {UsersEl}

                    </div>
                </div>
                }
            </div>
        );
    }

}


const mapStateToProps = (state) => {
    return {
        users: state.US.users,
        loading:state.US.loading
    }
}

export default connect(mapStateToProps, {getTodolistsTC})(Users);
