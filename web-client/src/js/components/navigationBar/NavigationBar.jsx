import * as React from "react";
import { Nav, Navbar} from "react-bootstrap";
import { Link } from 'react-router-dom';


export const NavigationBar = () => (
    <Navbar bg="light" variant="light">
<<<<<<< HEAD
        <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
        <Nav className="mr-auto nav">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/shirt">Camisetas</Nav.Link>
            <Nav.Link as={Link} to="/about">Sobre Nosotros</Nav.Link>
=======
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <Link to={"/"}>Inicio</Link>
            <Link to={"/shirt"}>Camisetas</Link>
            <Link to={"/about"}>Sobre nosotros</Link>
>>>>>>> f7e33d17ee0813a8f5af95d565ade7f9b7330a97
        </Nav>
    </Navbar>

)