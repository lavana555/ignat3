import React from 'react';

import Star from "./Star";
import classes from './Star.module.css'

class Stars extends React.Component {


    stars = [0, 1, 2, 3, 4];

    render() {
        const starslements = this.stars.map(star => <Star index={star}  />)
        return (

            <div className={classes.stars}>

                {starslements}
            </div>

        );
    }

}

export default Stars;
