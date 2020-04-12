import React, {FC} from 'react';
import {ProductType} from "../dal/apiShopTable";

type PropsType ={
    delProduct:(id:string)=>void
    el:ProductType
}

const ProductOptions:FC<PropsType>=(props)=> {
   let delProduct = ():void=> {
        props.delProduct(props.el.id)
    }

    return (
        <div style={{width:"15%",textAlign:"start"}}>
            <button>add to basket</button>
            <button>update</button>
            <button onClick={delProduct}>delete</button>
        </div>
    );
}

export default ProductOptions;