import * as React from 'react';
import {NavigationBar} from "./navigationBar/NavigationBar";
import {Footer} from "./footer/Footer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {About} from "./about/About";
import {Shirt} from "./shirt/Shirt";
import {useEffect, useState} from "react";
import {ShirtApi} from "../api/ShirtApi";
import {Home} from "./home/Home";
import {FormAddShirt} from "./forms/FormAddShirt";
import {FormEditShirt} from "./forms/FormEditShirt";
import {SoporteAlCliente} from "./soportealcliente/SoporteAlCliente";

export const App = () => {

    const shirtApi = new ShirtApi()

    const [shirts, setShirts] = useState([])


    useEffect(() => {

        shirtApi.getShirts()
            .then(setShirts)

    }, [])

    return <Router>
        <NavigationBar/>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/shirt">
                <Shirt shirts={shirts}/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/formAddShirt">
                <FormAddShirt/>
            </Route>
               <Route path="/formEditShirt">
            <FormEditShirt/>
        </Route>
            <Route path="/SoporteAlCliente">
                <SoporteAlCliente/>
            </Route>
        </Switch>
        <Footer/>

    </Router>
}
