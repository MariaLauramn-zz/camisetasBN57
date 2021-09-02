import * as React from 'react';
import {NavigationBar} from "./navigationBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {About} from "./about";
import {Shirt} from "./shirt";
import {useEffect, useState} from "react";
import {ShirtApi} from "../api/ShirtApi";

export const App = () => {

    const shirtApi = new ShirtApi()

    const [shirts, setShirts] = useState([])

    const [needsUpdate, setNeedsUpdate] = useState(true)

    useEffect(() => {
        if (needsUpdate) {
            shirtApi.getShirts()
                .then(setShirts)
                .then(_ => setNeedsUpdate(false))
        }
    }, [needsUpdate])

    const saveShirt = shirt =>
        shirtApi.saveShirt(shirt)
            .then(_ => setNeedsUpdate(true))

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