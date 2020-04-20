import React  from 'react';
import {useDispatch, useSelector} from "react-redux";
//import {ITableModel} from "../../ShopTable/ShopTable";
import {AppStateType} from "../../store";
import ShopTable,{ ITableModel } from '../../ShopTable/ShopTable';
import {ProductType} from "../../ShopTable/dal/apiShopTable";
import {delFromBasket} from "../../ShopBasket/bll/shopBasketReducer";
import { useHistory } from 'react-router-dom';



const PageProduct =()=>{
    const dispatch = useDispatch();
    const products = useSelector((state:AppStateType) => state.product.products);
    const history = useHistory();


  const  goBack=()=>{
        history.goBack();
    }




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
                    <button onClick={goBack}>Go Back</button>
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


export default PageProduct
