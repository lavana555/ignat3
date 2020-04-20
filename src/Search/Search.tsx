import React, {useCallback, useState} from 'react';
import {ProductType} from "../ShopTable/dal/apiShopTable";


type SearchPropsType = {
    searchProduct: (value: string) => void
    products?: ProductType[]
}

const Search: React.FC<SearchPropsType> = (props) => {

    const [inputDesiredProduct, setDesiredProduct] = useState('');

    const setDataSearch = (e: any) => {
        const value = e.target.value.toLowerCase();
        setDesiredProduct(value);
    };

    const searchProduct = () => {
        props.searchProduct(inputDesiredProduct);
        setDesiredProduct('');
    };


    return <div style={{marginTop: "20px"}}>

        <div>
            <input
                value={inputDesiredProduct}
                type="text"
                style={{margin: "10px", width: "300px"}}
                placeholder="Search product..."
                onChange={setDataSearch}
            />
            <button onClick={searchProduct}>search</button>
        </div>
    </div>;

};


export default Search;