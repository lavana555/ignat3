import React from 'react';

import Star from "./Star";
import classes from './Star.module.css'
import AddToBasketModal from "./AddToBasketModal";
import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";
import AddNewProductModal from "./AddNewProductModal";
import ColorSite from "./Color";

class Stars extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            stars: []
        }
    }



    componentDidMount() {
       this.stars ()

    }

    stars  ()  {
        //debugger
        switch (this.props.count) {
            case 1:

                return this.setState({ stars:[0]})
            case 2:

                return this.setState({ stars:[0,1]})
            case 3:

                return this.setState({ stars:[0,1,2]})
            case 4:

                return this.setState({ stars:[0,1,2,3]})
            case 5:

                return this.setState({ stars:[0,1,2,3,4]})

            default:
                return [];
        }
    }
    //stars=[0,1,2,3,4]

    render() {
        debugger
        const starslements = this.state.stars.map(star => <Star index={star}/>)
        return (

            <div className={classes.stars}>

                {starslements}
            </div>

        );
    }

}

export default Stars;
