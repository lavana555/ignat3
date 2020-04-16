import React from 'react';
import classes from "./buyMaS.module.css";
import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";
import AddToBasketModalModal from "./AddToBasketModal";
import Modal from "./Modal";
import AddNewProductModal from "./AddNewProductModal";
import Stars from "./Stars";
import ColorSite from "./Color";







class BuyMaS extends React.Component {

    state = {
        modal: false,
        modalchildren: '',


    }

    onAddToBasket = () => {
        this.setState({
            modal: true,
            modalchildren: 'basket'
        })

    }

    onUpDate = () => {
        this.setState({
            modal: true,
            modalchildren: 'update_product'
        })

    }
    onDeleteProduct = () => {
        this.setState({
            modal: true,
            modalchildren: 'delete'
        })

    }

    onAdd = () => {
        this.setState({
            modal: true,
            modalchildren: 'add'
        })

    }

    onUpdateModal = (productName,productValue) => {
        this.setState({
            modal: false,
            modalchildren: ''
        })
        this.props.updateProduct(productName,productValue)
    }

    onDeleteOKModal = () => {
        this.setState({
            modal: false,
            modalchildren: ''
        })
        this.props.delProduct()
    }

    onDeleteNOModal = () => {
        this.setState({
            modal: false,
            modalchildren: ''
        })
    }

    onAddBasketModal = () => {
        this.setState({
            modal: false,
            modalchildren: ''
        })
        this.props.addToBasket()
    }

    onNoBasketModal = () => {
        this.setState({
            modal: false,
            modalchildren: ''
        })
    }

    onModal = () => {
        this.setState({
            modal: false
        })
    }

    onAddProductModal = () => {
        this.setState({
            modal: false,
            modalchildren: ''
        })
    }

    onNoProductModal = () => {
        this.setState({
            modal: false,
            modalchildren: ''
        })
    }


    render() {


        return (
            // {
            <div>
                {this.state.modal &&
                <Modal modalchildren={this.state.modalchildren}
                       onUpdateModal={this.onUpdateModal}
                       onDeleteOKModal={this.onDeleteOKModal}
                       onDeleteNOModal={this.onDeleteNOModal}
                       onAddBasketModal={this.onAddBasketModal}
                       onNoBasketModal={this.onNoBasketModal}
                       onAddProductModal={this.onAddProductModal}
                       onNoProductModal={this.onNoProductModal}
                       onModal={this.onModal}
                       el={this.props.el}
                />

                }

                {/*style={{height: "100px", width: "100px", backgroundColor: color}*/}
                <div>
                    {/*<div className={classes.btn} onClick={this.onAdd}>add</div>*/}
                    <div className={classes.item}>
                        <div className={classes.btns}>
                            <div className={classes.btn} onClick={this.onAddToBasket}>add to basket</div>
                            <div className={classes.btn} onClick={this.onUpDate}>update</div>
                            <div className={classes.btn} onClick={this.onDeleteProduct}>delete</div>
                        </div>
                    </div>
                </div>
                {/*<ColorSite />*/}
            </div>
        );


    }
}

export default BuyMaS;
