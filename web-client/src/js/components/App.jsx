import * as React from 'react';
import {NavigationBar} from "./navigationBar/NavigationBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {About} from "./about/About";
import {Shirt} from "./shirt/Shirt";
import {useEffect, useState} from "react";
import {ShirtApi} from "../api/ShirtApi";


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
    <Route path="/shirt">
        <Shirt shirts={shirts}/>
    </Route>
    <Route path="/about">
        <About/>
    </Route>
</Switch>
    </Router>
}
