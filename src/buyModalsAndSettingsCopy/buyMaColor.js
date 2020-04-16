import React from 'react';
import classes from "./buyMaS.module.css";
import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";
import AddToBasketModalModal from "./AddToBasketModal";
import Modal from "./Modal";
import AddNewProductModal from "./AddNewProductModal";
import Stars from "./Stars";


class BuyMaColor extends React.Component {

    state = {
        modal: false,
        modalchildren: ''
        // colorbtn:'',
        // colorbg:''


    }


    onNewColor = () => {
        this.setState({
            modal: true,
            modalchildren: 'color'
        })

    }




    onModal = () => {
        this.setState({
            modal: false
        })
    }

    onAddPColorModal = () => {
        debugger
        this.setState({
            modal: false,
            modalchildren: ''
        })

    }

    onNoColorModal = () => {
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

                       onAddPColorModal={this.onAddPColorModal}
                       onNoColorModal={this.onNoColorModal}
                       onModal={this.onModal}

                />

                }
                <div>
                    <div className={classes.btn} onClick={this.onNewColor}>Different Color</div>

                </div>
            </div>
        );

    }
}

export default BuyMaColor;
