import * as React from 'react';
import {NavigationBar} from "./navigationBar/NavigationBar";
import {Footer} from "./footer/Footer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {About} from "./about/About";
import {Shirt} from "./shirt/Shirt";
import {useEffect, useState} from "react";
import {ShirtApi} from "../api/ShirtApi";
import {Home} from "./home/Home";
import {ShirtTable} from "./shirtTable/ShirtTable";
import {FormShirt} from "./form/FormShirt";
import {SoporteAlCliente} from "./soportealcliente/SoporteAlCliente";
import {Cart} from "./cart/Cart";

export const App = () => {

    const [shirts, setShirts] = useState([])

    const load = () => {
        new ShirtApi().getShirts().then(setShirts)
    }

    useEffect(load, [])


    return <>
        <Router>
            <NavigationBar/>
            <Switch>
                <Route exact path="/">
                </Route>

                <Route path="/tabla">
                    <ShirtTable
                        shirts={shirts}
                        onDeleteSuccess={load}/>
                </Route>
                <Route path="/shirt">
                    <Shirt shirts={shirts}/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route exact path="/cart">
                    <Cart/>
                </Route>
                <Route path="/add">
                    <FormShirt onSuccess={load}/>
                </Route>
                <Route path="/edit/:id">
                    <FormShirt onSuccess={load}/>
                </Route>
                <Route path="/cart">
                    <Cart/>
                </Route>

                <Route path="/SoporteAlCliente">
                    <SoporteAlCliente/>
                </Route>
            </Switch>
            <Footer/>

        </Router>
    </>
}
