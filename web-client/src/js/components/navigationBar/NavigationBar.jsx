import * as React from "react";
import {Link} from "react-router-dom";
import { Nav, Navbar} from "react-bootstrap";


export const NavigationBar = () => (
    <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <Link to={"/"}>Inicio</Link>
            <Link to={"/shirt"}>Camisetas</Link>
            <Link to={"/about"}>Sobre nosotros</Link>
        </Nav>
    </Navbar>

)