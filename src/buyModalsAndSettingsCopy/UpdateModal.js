import React from 'react';
import classes from "./buyMaS.module.css";


class UpdateModal extends React.Component {


    onUpdateModal = () => {
        this.props.onUpdateModal(false)
    }


    render() {

        return (
            // {
            <div>


                update product :
                <div> <input  placeholder="product name"/></div>

                <div><input  placeholder="product price"/></div>
                <div className={classes.btns}>
                    <div className={classes.btn} onClick={this.onUpdateModal}>OK</div>

                </div>



            </div>
        );


    }
}

export default UpdateModal;
