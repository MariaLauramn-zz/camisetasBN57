import * as React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from 'react-router-dom';
import Icon from '@material-ui/icons/AddShoppingCart';
import './navigationBar.scss';


export const NavigationBar = () => (
    <Navbar variant="light" className="d-flex justify-content-around shadow p-3 mb-5 bg-white rounde">
        <Navbar.Brand as={Link} to="/"></Navbar.Brand>
        <Nav className="nav justify-content-center">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/shirt">Camisetas</Nav.Link>
            <Nav.Link as={Link} to="/about">Sobre Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/formAddShirt">Formulario</Nav.Link>
        </Nav>
        <Icon className="carro">AddShoppingCartIcon</Icon>

    </Navbar>

)