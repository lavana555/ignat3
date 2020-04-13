import React, {FC} from 'react';
import {ProductType} from "../dal/apiShopTable";

type PropsType = {
    delProduct: (id: string) => void
    updateProduct: (productName: string, price: number, id: string) => void
    addToBasket: (product: ProductType) => void
    el: ProductType
}

const ProductOptions: FC<PropsType> = (props) => {
    let delProduct = (): void => {
        props.delProduct(props.el.id)
    }
    let updateProduct = (): void => {
        let newProductName = "testKMB23-success";
        let newPrice = 3333;
        props.updateProduct(newProductName, newPrice, props.el.id)
    }
    let addToBasket = (): void => {
        props.addToBasket(props.el)
    }

    return (
        <div style={{width: "15%", textAlign: "start"}}>
            <button onClick={addToBasket}>add to basket</button>
            <button onClick={updateProduct}>update</button>
            <button onClick={delProduct}>delete</button>
        </div>
    );
}

export default ProductOptions;