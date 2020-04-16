import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ShopTable, {ITableModel} from "../ShopTable/ShopTable";
import {AppStateType} from "../store";
import {ProductType} from "../ShopTable/dal/apiShopTable";
import {findProductC,
    // getProductC
} from "./SearchReducer";




const SeparateSearch = () => {

    const [inputDesiredProduct, setDesiredProduct] = useState('');
    const dispatch = useDispatch();
    const products = useSelector((state:AppStateType) => state.search.products);
    // useEffect( ()=>{dispatch(getProductC())},[]);
    const dataSearch = (e: any) => {
        const value = e.target.value.toLowerCase();
        setDesiredProduct(value)
    };

    const searchProduct = () => {
        debugger
        dispatch(findProductC(inputDesiredProduct));
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
        </div>,
        render: (el: ProductType, index) => {
            return <div>...</div>
            // return <ProductOptions el={el}
            //                        delProduct={deleteProduct}
            //                        updateProduct={updatePr}
            //                        addToBasket={addToBask}/>
        }
    }
];

    return <div>

        <input
            value={inputDesiredProduct}
    type="text"
    style = {{margin: "10px", width: "250px"}}
    placeholder="Search product..."
    onChange={dataSearch}
    />
    <button onClick={searchProduct}>search</button>

        <ShopTable model={arr1} data={products}/>
    </div>

}





export default SeparateSearch;