import React from 'react';
import classes from './Users.module.css'


class User extends React.Component {
    render() {

        return (

            <div className={classes.item}>
                name:
                <div>{this.props.name}</div>
            </div>

        );
    }

}

export default User;
