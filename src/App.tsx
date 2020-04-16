import React from 'react';
import './App.css';
import Registration from "./Registration";
import WithRouterRecoveryPassContainer from "./RecoveryPass/RecoveryPassContainer";
import {BrowserRouter, Link, Route} from "react-router-dom";
import WithRouterNewPassContainer from "./NewPass/NewPassContainer";
import Loginization from "./Login/Loginization";
import Users from "./Users/Users";
import Time from "./Time/Time";
import AuthMe from "./Login/AuthMe";
import Color from './Color/Color';
import ShopBasketContainer from "./ShopBasket/ShopBasketContainer";
import ShopTableContainer from "./ShopTable/ShopTableContainer";
import BuyMaS from "./buyModalsAndSettingsCopy/buyMaS";
//import SeparateSearch from "./Search/reserve";


class App extends React.Component {


    state = {
        flag: false

    }
    showHedaer = () => {
        this.setState({
            flag: !this.state.flag

        })
    }


    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="header">
                        {!this.state.flag &&
                            <div className="headerbtn" onClick={this.showHedaer}>SHOW HEADER</div>
                        }
                        {this.state.flag &&

                      <>
                          <div className="headerbtn" onClick={this.showHedaer}>COVER HEADER</div>
                          <ul className="nav">
                            <li><Link to="login">sig-in</Link></li>
                            <li><Link to="registration">register</Link></li>
                            <li><Link to="forgot">forgot</Link></li>
                            <li><Link to="modals">modals</Link></li>
                            <li><Link to="time">time</Link></li>
                            <li><Link to="color">color</Link></li>
                            <li><Link to="shop-table">shop-table</Link></li>
                            <li><Link to="shop-basket">shop-basket</Link></li>
                            <li><Link to="buyMas">buyMas</Link></li>
                            {/*<li><Link to="search">search</Link></li>*/}
                        </ul>

                      </>
                        }
                        <Route exact path='/registration' component={Registration}/>
                        <Route exact path='/forgot/' component={WithRouterRecoveryPassContainer}/>
                        <Route exact path='/reset-password/:token' component={WithRouterNewPassContainer}/>
                        <Route exact path='/login/' component={Loginization}/>
                        <Route exact path='/time/' component={Time}/>
                        <Route exact path='/authme/' component={AuthMe}/>
                        <Route exact path='/color/' component={Color}/>
                        <Route exact path='/shop-table/' component={ShopTableContainer}/>
                        <Route exact path='/shop-basket/' component={ShopBasketContainer}/>
                        <Route exact path='/buyMas/' component={BuyMaS}/>
                        {/*<Route exact path='/search/' component={SeparateSearch}/>*/}

                    </div>

                    {/*<Route exact path='/SignIN' component={SignIN}/>*/}
<Users />
                    {/*<Registration/>*/}
                    {/*<RecoveryPassContainer/>*/}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
