import React, {useCallback, useState} from 'react';
import SearchModal from "./SearchModal";
import {ProductType} from "../ShopTable/dal/apiShopTable";



type SearchPropsType = {
    searchProduct: (value: string) => void
    products?: ProductType[]
}

const Search: React.FC<SearchPropsType> = (props) => {

    const [inputDesiredProduct, setDesiredProduct] = useState('');
    const [isEmptyList, setEmptyList] = useState(false);
    const checkEmptyProductList = useCallback(() => {
        if(props.products?.length===0){
            setEmptyList(true)}
    }, []);


    const dataSearch = async (e: any) => {
        const value = e.target.value.toLowerCase();
        await setDesiredProduct(value)
    };

    const searchProduct = () => {
        props.searchProduct(inputDesiredProduct);
        checkEmptyProductList()
    };

    const closeModal =()=>{
        setEmptyList(false)
    }


    return <div>
        { isEmptyList &&
        <SearchModal closeModal = {closeModal}/>}
        <div>
        <input
            value={inputDesiredProduct}
            type="text"
            style={{margin: "10px", width: "250px"}}
            placeholder="Search product..."
            onChange={dataSearch}
        />
        <button onClick={searchProduct}>search</button>
        </div>
    </div>

};


export default Search;