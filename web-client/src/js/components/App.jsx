import * as React from "react";
import {NavBar} from "./navBar";
import {Nosotros} from "./nosotros";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Footer} from "./footer"

export const App = () => {
    return <Router>
        <NavBar />
        <Switch>
            <Route path="/nosotros">
                <Nosotros />
            </Route>
            <Route path="/catalogo">
                <Catalogo />
            </Route>
            </Switch>
        <Footer />

    </Router>

}
