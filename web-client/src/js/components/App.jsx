import * as React from "react";
import {NavigationBar} from "./NavigationBar";
import {Nosotros} from "./nosotros";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Footer} from "./footer"


export const App = () => {
    return <Router>
        <NavigationBar/>
        {/* <Switch>
            <Route path="/nosotros">
                <Nosotros />
            </Route>
            <Route path="/catalogo">
                <Catalogo />
            </Route>
            </Switch>
        <Footer /> */}

    </Router>

}
