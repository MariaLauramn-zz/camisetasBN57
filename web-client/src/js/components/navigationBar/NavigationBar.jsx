import * as React from "react";
import {Link} from "react-router-dom";

export const NavigationBar = () => (
    <nav className={'navigationBar'}>
        <Link to={"/shirt"}>Camisetas</Link>
        <Link to={"/about"}>Sobre nosotros</Link>
    </nav>
)