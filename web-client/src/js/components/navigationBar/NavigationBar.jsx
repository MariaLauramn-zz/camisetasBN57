import * as React from "react";
import {Link} from "react-router-dom";
import { Nav, Navbar} from "react-bootstrap";


export const NavigationBar = () => (
    <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto nav">
            <Nav.Link href="#pricing">Inicio</Nav.Link>
            <Nav.Link href="#home">Camisetas</Nav.Link>
            <Nav.Link href="#features">Sobre Nosotros</Nav.Link>
        </Nav>
    </Navbar>
)