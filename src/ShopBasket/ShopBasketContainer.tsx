import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addSortingBasket, delFromBasket, getFilteredBasket} from "./bll/shopBasketReducer";
import {ProductType} from "../ShopTable/dal/apiShopTable";
import ShopTable, { ITableModel } from '../ShopTable/ShopTable';
import {AppStateType} from "../store";
import Search from "../Search/Search";
import Paginator from "../pagination/Paginator";




const ShopBasketContainer =()=>{
    const dispatch = useDispatch();
    const products = useSelector((state:AppStateType) => state.basket.products);
    const productCount = useSelector((state:AppStateType) => state.basket.productTotalCount);
    const currentPage = useSelector((state:AppStateType) => state.basket.currentPage);
    // const pageCount = useSelector((state:AppStateType) => state.basket.pageCount);
    const searchProduct= (value: string) => {
        dispatch(getFilteredBasket(value));
    };
    const onCurrentPageChanged = (page: number) => {
        //dispatch(getProducts(page, pageCount=5));
    };

    // const addSortingProduct = (index: number) => {
    //     dispatch(addSortingBasket(index));
    // };
    const addSortingProduct = (index: number) => {
        alert(index);
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
                    <button onClick={()=>{addSortingProduct(1)}}>/\</button>
                    <button onClick={()=>{addSortingProduct(0)}}>\/</button>
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
                <Search searchProduct={searchProduct}/>
                <ShopTable model={arr1} data={products}/>
                <Paginator productCount={productCount}
                           onPageChanged={onCurrentPageChanged}
                           currentPage={currentPage}/>
            </div>
        );

}


export default ShopBasketContainer