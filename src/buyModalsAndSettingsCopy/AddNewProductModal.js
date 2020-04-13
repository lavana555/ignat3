import React from 'react';
import classes from "./buyMaS.module.css";


class AddToBasketModalModal extends React.Component {

    onAddProductModal=()=>{
        this.props.onAddProductModal(false)
    }
    onNoProductModal=()=>{
        this.props.onNoProductModal(false)
    }


    render() {

        return (
            // {
            <div>

                <div   className={classes.wrapper}>
                    <div className={classes.simplemodal}>

                        <div> add new product:</div>
                        <div> <input  placeholder="add new product"/></div>

                        <div><input  placeholder="1000"/></div>
                        <div className={classes.btns}>
                            <div className={classes.btn} onClick={this.onAddProductModal}>YES</div>
                            <div className={classes.btn} onClick={this.onNoProductModal}>NO</div>
                        </div>
                    </div>
                </div>


            </div>
        );


    }
}

export default AddToBasketModalModal;
