import React, {useCallback, useEffect} from 'react';
import ShopTable, {ITableModel} from "./ShopTable";
import {useDispatch, useSelector} from "react-redux";
import ProductOptions from './ProductOptions/ProductOptions';
import {ProductType} from "./dal/apiShopTable";
import {addProduct, delProduct, getProducts, updateProduct} from "./bll/shopTableReducer";
import {addToBasket} from "../ShopBasket/bll/shopBasketReducer";
import {AppStateType} from "../store";


const ShopTableContainer=()=>{
    const products = useSelector((state:AppStateType) => state.shop.products);
    const dispatch = useDispatch();
    useEffect( ()=>{dispatch(getProducts())
    },[]);

    const addPr = useCallback(() => {
        let productName = "testKMB23-1";
        let price = 5000;
        let productType = "gold";
        dispatch(addProduct(productName, price, productType));
    }, []);

    const deleteProduct = useCallback((id) => {
        dispatch(delProduct(id));
    }, []);
    const updatePr = useCallback((newProductName, newPrice, id) => {
        dispatch(updateProduct(newProductName, newPrice, id));
    }, []);

    const addToBask = useCallback((product) => {
        dispatch(addToBasket(product));
    }, []);




 let   arr1: Array<ITableModel> = [
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
                <button onClick={addPr}>Add</button>
            </div>,
            render: (el: ProductType, index) => {
                return <ProductOptions el={el}
                                       delProduct={deleteProduct}
                                       updateProduct={updatePr}
                                       addToBasket={addToBask}/>
            }
        }
    ];

        return (
            <div>
                <ShopTable model={arr1} data={products}/>
            </div>
        );

}

export default ShopTableContainer