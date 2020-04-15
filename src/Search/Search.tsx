import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {findProductC} from "./SearchReducer";

type SearchPropsType = {
    searchProduct: (value: string) => void
}

const Search: React.FC<SearchPropsType> = (props) => {
    //const dispatch = useDispatch();

    const [inputDesiredProduct, setDesiredProduct] = useState('');
    const dataSearch = (e: any) => {
        const value = e.target.value.toLowerCase();
        setDesiredProduct(value)
    };

    const searchProduct = () => {
        props.searchProduct(inputDesiredProduct);
    };


    return <div>

        <input
            value={inputDesiredProduct}
            type="text"
            style={{margin: "10px", width: "250px"}}
            placeholder="Search product..."
            onChange={dataSearch}
        />
        <button onClick={searchProduct}>search</button>

    </div>

};


export default Search;