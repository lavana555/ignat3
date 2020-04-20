import React from 'react';
import classes from "./SearchModal.module.css";


const SearchModal = (props) => {

    const closeModal = () => {
        props.closeModal();
    };


    return (
        <div>
            <div className={classes.wrapper}>
                <div className={classes.simplemodal}>s
                    <div> There is no result for this request</div>
                    <div className={classes.btn} onClick={closeModal}>OK</div>
                </div>
            </div>
        </div>
    );


};

export default SearchModal;
