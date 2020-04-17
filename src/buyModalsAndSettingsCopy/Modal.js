import React from 'react';
import classes from "./buyMaS.module.css";
import AddToBasketModal from "./AddToBasketModal";
import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";
import AddNewProductModal from "./AddNewProductModal";
import ColorSite from "./Color";
import SearchModal from "../Search/SearchModal";


class Modal extends React.Component {


    onModal = () => {
        this.props.onModal(false)
    }

    render() {
        let modal = () => {
            switch (this.props.modalchildren) {
                case 'basket':
                    return <AddToBasketModal onAddBasketModal={this.props.onAddBasketModal}
                                             onNoBasketModal={this.props.onNoBasketModal}/>;
                case 'delete':
                    return <DeleteModal onDeleteOKModal={this.props.onDeleteOKModal}
                                        onDeleteNOModal={this.props.onDeleteNOModal}/>
                case 'update_product' :
                    return <UpdateModal onUpdateModal={this.props.onUpdateModal} el={this.props.el}/>
                case 'add' :
                    return <AddNewProductModal onAddProductModal={this.props.onAddProductModal}
                                               onNoProductModal={this.props.onNoProductModal}/>
                case 'color' :
                    return <ColorSite  onAddPColorModal={this.props.onAddPColorModal}
                                       onNoColorModal={this.props.onNoColorModal}/>

                default:
                    return '';
            }
        }

        return (

            <div>

                <div className={classes.wrapper}
                     // onClick={this.onModal}
                >
                    <div className={classes.simplemodal}>
                        {modal()}

                    </div>
                </div>


            </div>
        );


    }
}

export default Modal;
