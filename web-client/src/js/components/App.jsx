import * as React from 'react';
import {NavigationBar} from "./navigationBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {About} from "./about";
import {Shirt} from "./shirt";

export const App = () => {

    const shirtList = [
        {
            name: "vintage",
            size: "m",
            color:"black",
            price:"20,00",
        },
        {
            name: "viaje",
            size: "s",
            color:"white",
            price:"20,00",
        }
    ]

    return <Router>
        <NavigationBar/>
<Switch>
    <Route path="/shirt">
        <Shirt shirts={shirtList}/>
    </Route>
    <Route path="/about">
        <About />
    </Route>
</Switch>
    </Router>
}