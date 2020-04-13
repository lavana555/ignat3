import React from 'react';
import classes from "./buyMaS.module.css";
import AddToBasketModal from "./AddToBasketModal";
import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";
import AddNewProductModal from "./AddNewProductModal";


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
                    return <UpdateModal onUpdateModal={this.props.onUpdateModal}/>
                case 'add' :
                    return <AddNewProductModal onAddProductModal={this.props.onAddProductModal}
                                               onNoProductModal={this.props.onNoProductModal}/>

                default:
                    return '';
            }
        }

        return (

            <div>

                <div className={classes.wrapper} onClick={this.onModal}>
                    <div className={classes.simplemodal}>
                        {modal()}

                    </div>
                </div>


            </div>
        );


    }
}

export default Modal;
