import React, {useCallback, useEffect, useState} from 'react';
import ShopTable, {ITableModel} from "./ShopTable";
import {useDispatch, useSelector} from "react-redux";
import ProductOptions from './ProductOptions/ProductOptions';
import {ProductType} from "./dal/apiShopTable";
import {
    addProduct,
    delProduct,
    getProducts,
    updateProduct, findProducts, addSortingProduct, setPriceRangeValues
} from "./bll/shopTableReducer";
import {addToBasket} from "../ShopBasket/bll/shopBasketReducer";
import {AppStateType} from "../store";
import BuyMaSadd from "../buyModalsAndSettingsCopy/buyMaSadd";
import Search from "../Search/Search";
import Paginator from "../pagination/Paginator";
import PriceRange from "../PriceRange";
import SearchModal from "../Search/SearchModal";


const ShopTableContainer = () => {
    const products = useSelector((state: AppStateType) => state.shop.products);
    const productCount = useSelector((state: AppStateType) => state.shop.productTotalCount);
    const pageCount = useSelector((state: AppStateType) => state.shop.pageCount);
    const currentPage = useSelector((state: AppStateType) => state.shop.currentPage);
    const [showModal, setShowModal] = useState(false);


    const dispatch = useDispatch();
    useEffect((page = 1, pageCount = 7) => {
        dispatch(getProducts(page, pageCount));
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
    const searchProduct = (value: string) => {
        const prods = findProducts(value);
        // @ts-ignore
        dispatch(prods).then(res => {
            setShowModal(res.length === 0);
        });
    };
    const closeModal = () => {
        setShowModal(false);
    };

    const setRangeValues = (values: number[]) => {
        debugger;
        dispatch(setPriceRangeValues(values));
    };

    // const sortAscProduct = (index: number) => {
    //     dispatch(addSortingProduct(1));
    // };
    // const sortDescProduct=(index: number) => {
    //     dispatch(addSortingProduct(0));
    // };


    let arr1: Array<ITableModel> = [
        {
            title: () => <div
                style={{width: "60%", display: "flex", alignItems: "center", textAlign: "start"}}>Product</div>,
            render: (el: ProductType, index) => {
                return <div key={index} style={{width: "60%", textAlign: "start"}}>{el.productName}</div>;
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
                    <button onClick={() => {
                        dispatch(addSortingProduct(1));
                    }}>/\
                    </button>
                    <button onClick={() => {
                        dispatch(addSortingProduct(0));
                    }}>\/
                    </button>
                </div>
            </div>,
            render: (el: ProductType, index) => {
                return <div key={index} style={{width: "25%", textAlign: "start"}}>{el.price}</div>;
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
                                       addToBasket={addToBask}/>;
            }
        }
    ];

    return (
        <div>
            <div style={{display: "flex", marginTop: "20px", justifyContent: "center"}}>
                <PriceRange setRangeValues={setRangeValues}/>
                <Search searchProduct={searchProduct} products={products}/>
                {showModal &&
                <SearchModal closeModal={closeModal}/>}
            </div>

            <ShopTable model={arr1} data={products}/>
            <Paginator productCount={productCount}
                       onPageChanged={onCurrentPageChanged}
                       currentPage={currentPage}/>
        </div>
    );

};

export default ShopTableContainer;
