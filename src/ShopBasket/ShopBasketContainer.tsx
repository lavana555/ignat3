import React, {Component} from 'react';

import {connect} from "react-redux";
import {AppStateType} from "../store";
import { delFromBasket} from "./bll/shopBasketReducer";
import {ProductType} from "../ShopTable/dal/apiShopTable";
import ShopTable, { ITableModel } from '../ShopTable/ShopTable';


type MapStateType = {
    products: Array<ProductType>
}
type MapDispatchType = {
    delFromBasket: (id: string) => void
}
type PropsType = MapDispatchType & MapStateType

class ShopBasketContainer extends Component<PropsType> {

    arr1: Array<ITableModel> = [
        {
            title: () => <div
                style={{width: "60%", display: "flex", alignItems: "center", textAlign: "start"}}>Product</div>,
            render: (el: ProductType, index) => {
                return <div key={index} style={{width: "60%", textAlign: "start"}}>{el.productName}</div>
            }
        },
        {
            title: () => <div style={{width: "25%", display: "flex", alignItems: "center", textAlign: "start"}}>
                Price
                <div style={{
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <button>/\</button>
                    <button>\/</button>
                </div>
            </div>,
            render: (el: ProductType, index) => {
                return <div key={index} style={{width: "25%", textAlign: "start"}}>{el.price}</div>
            }
        },
        {
            title: () => <div style={{width: "15%", textAlign: "start"}}>
              ...
            </div>,
            render: (el: ProductType, index) => {
                return <div style={{width: "15%", textAlign: "start"}}><button onClick={()=>this.props.delFromBasket(el.id)}>Delete</button></div>
            }
        }
    ]


    render() {
        return (
            <div>
                <ShopTable model={this.arr1} data={this.props.products}/>
            </div>
        );
    }
}

const mstp = (state: AppStateType): MapStateType =>
    ({
        products: state.basket.products
    })



export default connect(mstp, {
   delFromBasket
})(ShopBasketContainer)