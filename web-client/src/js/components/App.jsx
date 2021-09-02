import * as React from 'react';
import {NavigationBar} from "./navigationBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {About} from "./about";
import {Shirt} from "./shirt";
import {useEffect, useState} from "react";

export const App = () => {

    const [shirts, setShirts] = useState([])
    useEffect(() => {
        fetch("/shirts")
            .then(response => response.json())
            .then(setShirts)
    })

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