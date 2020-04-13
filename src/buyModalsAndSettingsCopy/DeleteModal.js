import React from 'react';
import classes from "./buyMaS.module.css";


class DeleteModal extends React.Component {


    onDeleteOKModal = () => {
        this.props.onDeleteOKModal(false)
    }
    onDeleteNOModal = () => {
        this.props.onDeleteNOModal(false)
    }

    render() {

        return (
            // {
            <div>

                <div className={classes.wrapper}>
                    <div className={classes.simplemodal}>

                        <div> delete item</div>
                        <div className={classes.btns}>
                            <div className={classes.btn} onClick={this.onDeleteOKModal}>OK</div>
                            <div className={classes.btn} onClick={this.onDeleteNOModal}>NO</div>
                        </div>
                    </div>
                </div>


            </div>
        );


    }
}

export default DeleteModal;
