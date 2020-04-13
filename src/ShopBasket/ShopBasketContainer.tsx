import React  from 'react';
import {useDispatch, useSelector} from "react-redux";
import { delFromBasket} from "./bll/shopBasketReducer";
import {ProductType} from "../ShopTable/dal/apiShopTable";
import ShopTable, { ITableModel } from '../ShopTable/ShopTable';
import {AppStateType} from "../store";


const ShopBasketContainer =()=>{
    const dispatch = useDispatch();
    const products = useSelector((state:AppStateType) => state.basket.products);
    let arr1: Array<ITableModel> = [
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
                return <div style={{width: "15%", textAlign: "start"}}>
                    <button onClick={()=>dispatch(delFromBasket(el.id))}>Delete</button>
                </div>
            }
        }
    ]

        return (
            <div>
                <ShopTable model={arr1} data={products}/>
            </div>
        );

}





export default ShopBasketContainer