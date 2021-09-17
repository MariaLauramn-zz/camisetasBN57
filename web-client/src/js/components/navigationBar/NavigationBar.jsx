import * as React from "react";
import {Nav, Navbar, Container} from "react-bootstrap";
import {Link} from 'react-router-dom';
import Icon from '@material-ui/icons/AddShoppingCart';
import './navigationBar.scss';
import logo from "../assets/img/logoBN57.png";
import {AddShoppingCart} from "@material-ui/icons";


export const NavigationBar = () => (

    <Navbar expand="md" className="fixed-top d-flex justify-content-evenly     shadow p-3 mb-5 bg-white">
        <Container>
            <Navbar.Brand as={Link} to="/">
                <img className="logo" src={logo} alt="logo brand"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav m-auto" activeKey="/home">

                    <Nav.Link as={Link} exact={true} to="/">Inicio</Nav.Link>
                    <Nav.Link as={Link} to="/shirt">Camisetas</Nav.Link>
                    <Nav.Link as={Link} to="/about">Sobre Nosotros</Nav.Link>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>

                </Nav>
                <Link className="carro" to="/cart"><AddShoppingCart/></Link>
            </Navbar.Collapse>

        </Container>
    </Navbar>


)
