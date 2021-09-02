import * as React from 'react';
import {NavigationBar} from "./navigationBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {About} from "./about";
import {Shirt} from "./shirt";

export const App = () => {
    return <Router>
        <NavigationBar/>
<Switch>
    <Route path="/shirt">
        <Shirt />
    </Route>
    <Route path="/about">
        <About />
    </Route>
</Switch>
    </Router>
}