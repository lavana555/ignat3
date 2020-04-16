import React, {useCallback, useEffect, useState} from 'react';
import ShopTable, {ITableModel} from "./ShopTable";
import {useDispatch, useSelector} from "react-redux";
import ProductOptions from './ProductOptions/ProductOptions';
import {ProductType} from "./dal/apiShopTable";
import {
    addProduct,
    delProduct,
    getProducts,
    updateProduct, getFilteredProducts
} from "./bll/shopTableReducer";
import {addToBasket} from "../ShopBasket/bll/shopBasketReducer";
import {AppStateType} from "../store";
import BuyMaSadd from "../buyModalsAndSettingsCopy/buyMaSadd";

import Search from "../Search/Search";
import Paginator from "../pagination/Paginator";


const ShopTableContainer = () => {
    const products = useSelector((state: AppStateType) => state.shop.products);
    const productCount = useSelector((state: AppStateType) => state.shop.productTotalCount);
    const pageCount = useSelector((state: AppStateType) => state.shop.pageCount);
    const currentPage = useSelector((state: AppStateType) => state.shop.currentPage);

    const dispatch = useDispatch();
    useEffect((page = 1, pageCount = 5) => {
        debugger
        dispatch(getProducts(page, pageCount))
    }, []);

    const addPr = useCallback((productName: any, price: any) => {
        // let productName = "testKMB23-1";
        //let price = 5000;
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


    const onCurrentPageChanged = (page: number) => {
        dispatch(getProducts(page, pageCount));
    };
    const searchProduct= (value: string) => {
        dispatch(getFilteredProducts(value));
    };


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
                {/*<button onClick={addPr}>Add</button>*/}
                <BuyMaSadd
                    addPr={addPr}
                />
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

            <Search searchProduct={searchProduct}/>
            <ShopTable model={arr1} data={products}/>
            <Paginator productCount={productCount}
                       onPageChanged={onCurrentPageChanged}
                       currentPage={currentPage}/>
        </div>
    );

}

export default ShopTableContainer
