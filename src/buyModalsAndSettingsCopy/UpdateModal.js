import React from 'react';
import classes from "./buyMaS.module.css";


class UpdateModal extends React.Component {

    state={

        value:this.props.el.price,
        productName:this.props.el.productName
    }


    onUpdateModal = () => {
        this.props.onUpdateModal(this.state.productName,this.state.value)
       // alert([this.state.productName, this.state.value])
    }

    ChangedProductName=(e)=>{
        let newProductName=e.target.value
        this.setState({
            productName:newProductName
        })
    }

    ChangedProductValue=(e)=>{
        let newValue=e.target.value
        this.setState({
            value:newValue
        })
    }



    render() {

        return (
            // {
            <div>


                update product :
                <div> <input value={this.state.productName}  placeholder="product name" onChange={this.ChangedProductName}/></div>

                <div><input  placeholder="product price"  value={this.state.value } onChange={this.ChangedProductValue}/></div>
                <div className={classes.btns}>
                    <div className={classes.btn} onClick={this.onUpdateModal}>OK</div>

                </div>



            </div>
        );


    }
}

export default UpdateModal;
