import React from 'react';
import classes from "./buyMaS.module.css";


class AddToBasketModalModal extends React.Component {

    state={
        productName:'new product',
        productValue:500

    }

    onAddProductModal=()=>{
       // debugger
        this.props.onAddProductModal(this.state.productName,this.state.productValue)
      //  alert([this.state.productName,this.state.productValue])
    }
    onNoProductModal=()=>{
        this.props.onNoProductModal(false)
    }

    addNewProductName=(e)=>{
        let  newPrroductName=e.target.value
        this.setState({
            productName:newPrroductName
        })
    }

    addNewProductvalue=(e)=>{
        let  newPrroductValue=e.target.value
        this.setState({
            productValue:newPrroductValue
        })
    }


    render() {

        return (
            // {
            <div>

                <div   className={classes.wrapper}>
                    <div className={classes.simplemodal}>

                        <div> add new product:</div>
                        <div> <input  placeholder="add new product" value={this.state.productName} onChange={this.addNewProductName}/></div>

                        <div><input  placeholder="100500" value={this.state.productValue} onChange={this.addNewProductvalue}/></div>
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
