// Al incluír aquí el SCSS hacemos que webpack genere
// un archivo bundle.js que contiene tanto el javascript
// como el CSS
import '../scss/main.scss'
import * as React from "react";
import ReactDOM from 'react-dom'
import {App} from "./components/App";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
  <App />
  </BrowserRouter>,
    document.getElementById("app")
)
