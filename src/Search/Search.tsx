import React, {Component} from 'react';
import {connect} from "react-redux";


type MapStateType = {
products: object
}
// type MapDispatchType = {
//     loginTC: (email: string, password: string, rememberMe: boolean) => void
//     // rememberMeAC: (rememberMe: boolean)=>void
// }
type PropsType = MapStateType;


class Search extends Component<PropsType> {

    dataSearch = (e: any) => {
        const value = e.target.value.toLowerCase();

        const filter = data.filter(product => {
            return user.name.toLowerCase().includes(value);
        });

        
    };

    render() {
        return <div>

                <input
                    value={term}
                    type="text"
                    className="form-control"
                    placeholder="Search product..."
                    onChange={this.dataSearch}
                />

        </div>
    }
};


const mstp = (state: any): MapStateType => ({
    products: state.search.products
});


export default connect(mstp, {})(Search)