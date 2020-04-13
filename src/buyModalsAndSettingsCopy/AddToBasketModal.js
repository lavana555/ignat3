import React from 'react';
import classes from "./buyMaS.module.css";


class AddToBasketModalModal extends React.Component {

    onAddBasketModal = () => {
        this.props.onAddBasketModal(false)
    }
    onNoBasketModal = () => {
        this.props.onNoBasketModal(false)
    }


    render() {

        return (
            // {
            <div>

                <div className={classes.wrapper}>
                    <div className={classes.simplemodal}>

                        <div> Are you sure add item to basket</div>
                        <div className={classes.btns}>
                            <div className={classes.btn} onClick={this.onAddBasketModal}>YES</div>
                            <div className={classes.btn} onClick={this.onNoBasketModal}>NO</div>
                        </div>
                    </div>
                </div>


            </div>
        );


    }
}

export default AddToBasketModalModal;
