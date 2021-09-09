import * as React from "react";
import { Nav, Navbar} from "react-bootstrap";
import { Link } from 'react-router-dom';


export const NavigationBar = () => (
    <Navbar bg="light" variant="light">
        <Navbar.Brand as={Link} to="/">Logo</Navbar.Brand>
        <Nav className="mr-auto nav">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/shirt">Camisetas</Nav.Link>
            <Nav.Link as={Link} to="/about">Sobre Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/formAddShirt">Formulario</Nav.Link>
        </Nav>
    </Navbar>

)