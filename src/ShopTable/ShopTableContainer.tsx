import React, {Component} from 'react';
import ShopTable, {ITableModel} from "./ShopTable";
import {connect} from "react-redux";
import {withRouter, RouteComponentProps} from "react-router";
import {AppStateType} from "../store";
import {ProductType} from "./bll/shopTableReducer";
import ProductOptions from './ProductOptions/ProductOptions';

type MapStateType = {
    products: Array<ProductType>
}
type MapDispatchType = {}
type PropsType = MapDispatchType & MapStateType & RouteComponentProps
let arr1: Array<ITableModel> = [
    {
        title: () => <div style={{width: "60%",display:"flex",alignItems:"center", textAlign: "start"}}>Product</div>,
        render: (el: ProductType, index) => {
            return <div key={index} style={{width: "60%", textAlign: "start"}}>{el.product}</div>
        }
    },
    {
        title: () => <div style={{width: "25%",display:"flex",alignItems:"center", textAlign: "start"}}>
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
            <button>Add</button>
        </div>,
        render: (el: ProductType, index) => {
            return <ProductOptions/>
        }
    }
]

class ShopTableContainer extends Component<PropsType> {

    render() {
        return (
            <div>
                <ShopTable model={arr1} data={this.props.products}/>
            </div>
        );
    }
}

const mstp = (state: AppStateType): MapStateType =>
    ({
        products: state.shop.products
    })


let WithRouterShopTableContainer = withRouter(ShopTableContainer);
export default connect(mstp, {})(WithRouterShopTableContainer)