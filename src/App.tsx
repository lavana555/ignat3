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

import {FormattedMessage, IntlProvider} from "react-intl";
import {Switch} from "antd";
// @ts-ignore
import messages_ru from "./buyModalsAndSettingsCopy/i18next/ru";
// @ts-ignore
import messages_en from "./buyModalsAndSettingsCopy/i18next/en";

//import SeparateSearch from "./Search/reserve";


import 'antd/dist/antd.css';
import BuyMaColor from "./buyModalsAndSettingsCopy/buyMaColor";
import PageProduct from "./buyModalsAndSettingsCopy/PageRroduct/PageProduct";


const LANGUAGES = {
    EN: 'en',
    RU: 'ru'
}

class App extends React.Component {


    state = {
        flag: false,
        isChecked: true,
        currentLocal: LANGUAGES.EN,
        messages: {
            [LANGUAGES.RU]: messages_ru,
            [LANGUAGES.EN]: messages_en
        }

    }


    changeLocal = () => {
        const newLang = this.state.currentLocal === LANGUAGES.EN ? LANGUAGES.RU : LANGUAGES.EN;
        this.setState({currentLocal: newLang})
        localStorage.setItem('language', newLang);
    };


    componentDidMount() {
        const language = localStorage.getItem('language');
        if (language) {
            this.setState({currentLocal: language})
        }

    }


    showHedaer = () => {
        this.setState({
            flag: !this.state.flag

        })
    }


    render() {
        let isChecked = this.state.currentLocal === LANGUAGES.EN;


        return (
            <BrowserRouter>
                <div className="App">

                    <BuyMaColor />
                    <IntlProvider locale={this.state.currentLocal}
                                  messages={this.state.messages[this.state.currentLocal]}>
                        <div className="header">


                            <div className="switch">
                                <FormattedMessage id={'app.language'}
                                                  defaultMessage={'Language'}

                                />
                                <Switch className="switchBtn" checked={isChecked} onChange={this.changeLocal}
                                        checkedChildren="EN" unCheckedChildren="RU"/>
                            </div>
                            {!this.state.flag &&
                            //
                            <div className="headerbtn" onClick={this.showHedaer}>
                                <FormattedMessage id={'app.showHeader'}
                                                  defaultMessage={'SHOW HEADER'}/>

                            </div>
                            }
                            {this.state.flag &&

                            <>
                                <div className="headerbtn" onClick={this.showHedaer}>

                                    <FormattedMessage id={'app.CoverHeader'}
                                                      defaultMessage={'COVER HEADER'}/>

                                </div>
                                <ul className="nav">

                                    <li><Link to="login">
                                        <FormattedMessage id={'app.sig-in'}
                                                          defaultMessage={'sig-in'}/>

                                    </Link></li>
                                    <li><Link to="registration">
                                        <FormattedMessage id={'app.register'}
                                                          defaultMessage={'register'}/>
                                    </Link></li>
                                    <li><Link to="forgot">
                                        <FormattedMessage id={'app.forgot'}
                                                          defaultMessage={'forgot'}/>
                                    </Link></li>
                                    <li><Link to="modals">
                                        <FormattedMessage id={'app.modals'}
                                                          defaultMessage={'modals'}/>
                                    </Link></li>
                                    <li><Link to="time">
                                        <FormattedMessage id={'app.time'}
                                                          defaultMessage={'time'}/>
                                    </Link></li>
                                    <li><Link to="color">
                                        <FormattedMessage id={'app.color'}
                                                          defaultMessage={'color'}/>
                                    </Link></li>
                                    <li><Link to="shop-table">
                                        <FormattedMessage id={'app.shop-table'}
                                                          defaultMessage={'shop-table'}/>
                                    </Link></li>
                                    <li><Link to="shop-basket">
                                        <FormattedMessage id={'app.shop-basket'}
                                                          defaultMessage={'shop-basket'}/>
                                    </Link></li>
                                    <li><Link to="buyMas">buyMas</Link></li>
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
                            <Route exact path='/pageproduct/' component={PageProduct}/>

                        </div>

                        {/*<Route exact path='/SignIN' component={SignIN}/>*/}
                        <Users/>
                    </IntlProvider>

                    {/*<div className="header">*/}
                    {/*    {!this.state.flag &&*/}
                    {/*        <div className="headerbtn" onClick={this.showHedaer}>SHOW HEADER</div>*/}
                    {/*    }*/}
                    {/*    {this.state.flag &&*/}

                    {/*  <>*/}
                    {/*      <div className="headerbtn" onClick={this.showHedaer}>COVER HEADER</div>*/}
                    {/*      <ul className="nav">*/}
                    {/*        <li><Link to="login">sig-in</Link></li>*/}
                    {/*        <li><Link to="registration">register</Link></li>*/}
                    {/*        <li><Link to="forgot">forgot</Link></li>*/}
                    {/*        <li><Link to="modals">modals</Link></li>*/}
                    {/*        <li><Link to="time">time</Link></li>*/}
                    {/*        <li><Link to="color">color</Link></li>*/}
                    {/*        <li><Link to="shop-table">shop-table</Link></li>*/}
                    {/*        <li><Link to="shop-basket">shop-basket</Link></li>*/}
                    {/*        <li><Link to="buyMas">buyMas</Link></li>*/}
                    {/*        /!*<li><Link to="search">search</Link></li>*!/*/}
                    {/*    </ul>*/}

                    {/*  </>*/}
                    {/*    }*/}
                    {/*    <Route exact path='/registration' component={Registration}/>*/}
                    {/*    <Route exact path='/forgot/' component={WithRouterRecoveryPassContainer}/>*/}
                    {/*    <Route exact path='/reset-password/:token' component={WithRouterNewPassContainer}/>*/}
                    {/*    <Route exact path='/login/' component={Loginization}/>*/}
                    {/*    <Route exact path='/time/' component={Time}/>*/}
                    {/*    <Route exact path='/authme/' component={AuthMe}/>*/}
                    {/*    <Route exact path='/color/' component={Color}/>*/}
                    {/*    <Route exact path='/shop-table/' component={ShopTableContainer}/>*/}
                    {/*    <Route exact path='/shop-basket/' component={ShopBasketContainer}/>*/}
                    {/*    <Route exact path='/buyMas/' component={BuyMaS}/>*/}
                    {/*    /!*<Route exact path='/search/' component={SeparateSearch}/>*!/*/}

                    {/*</div>*/}

                    {/*<Route exact path='/SignIN' component={SignIN}/>*/}
{/*<Users />*/}

                    {/*<Registration/>*/}
                    {/*<RecoveryPassContainer/>*/}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
