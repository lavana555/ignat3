import React, {useState} from 'react';
import classes from "./buyMaS.module.css";
import Modal from "./Modal";
import {useSelector} from "react-redux";


//let colorbtn = useSelector((state) => state.color.colorbtn);

// class BuyMaSadd extends React.Component {
//
//     state = {
//         modal: false,
//         modalchildren: '',
//
//
//     }
//     onAdd = () => {
//         this.setState({modal: true, modalchildren: 'add'})
//     }
//     onModal = () => {
//         this.setState({modal: false})
//     }
//     onAddProductModal = (productName, productValue) => {
//         debugger
//         this.setState({
//             modal: false,
//             modalchildren: ''
//         })
//         this.props.addPr(productName, productValue)
//     }
//     onNoProductModal = () => {
//         this.setState({modal: false, modalchildren: ''})
//     }
//
//     render() {
//         return (
//             <div>
//                 {this.state.modal &&
//                 <Modal modalchildren={this.state.modalchildren}
//                        onAddProductModal={this.onAddProductModal}
//                        onNoProductModal={this.onNoProductModal}
//                        onModal={this.onModal}
//                        el={this.props.el}/>}
//                 <div>
//                     <div className={classes.btn} style={{backgroundColor: this.props.colorbtn}} onClick={this.onAdd}>add</div>
//
//                 </div>
//             </div>
//         );
//
//     }
// }
//
// const mstp=(state)=> {
//     return {
//         colorbtn: state.color.colorbtn
//     }
// }
//
//
// export default BuyMaSadd;
//export default connect(mstp,null) (BuyMaSadd);
function BuyMaSadd(props) {


    const [modal, onModeBoolea] = useState(false)
    const [modalchildren, onModeChildren] = useState('')


    let onChenged = () => {
        onModeBoolea(true)
        onModeChildren('add')
    }
    let onModal = () => {
        onModeBoolea(false)
    }


      let  onAddProductModal = (productName, productValue) => {
          onModeBoolea(false)
          onModeChildren('')
        props.addPr(productName, productValue)
    }
  let  onNoProductModal = () => {

        onModeBoolea(false)
        onModeChildren('')
    }

    let colorbtn = useSelector((state) => state.color.colorbtn);


    return (
        <div>
            {modal &&
            <Modal modalchildren={modalchildren}
                   onAddProductModal={onAddProductModal}
                   onNoProductModal={onNoProductModal}
                   onModal={onModal}
                   el={props.el}/>}
            <div>
                <div className={classes.btn} style={{backgroundColor: colorbtn}} onClick={onChenged}>add</div>

            </div>
        </div>
    );

}


export default BuyMaSadd;
