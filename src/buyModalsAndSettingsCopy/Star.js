import React from 'react';

import starEmpty from '../aseets/starEmpty.png'
import star from '../aseets/star.png'
//import  './Star.module.css'
import classes from './Star.module.css'


class Star extends React.Component {
    state={
        flag:false
    }

    onStarClick=()=>{
        this.setState({
            flag:!this.state.flag
        })
    }

    render() {
        // let star=this.state.flag?"star":"starEmpty"
        // let eeee="star"
        return (

            <div >
                {this.state.flag &&
                <div className={classes.star} onClick={this.onStarClick}></div>
                }
                {!this.state.flag &&
                    <div className={classes.starEmpty} onClick={this.onStarClick}></div>
                }
            </div>

        );
    }

}

export default Star;
