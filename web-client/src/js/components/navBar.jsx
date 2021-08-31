import * as React from "react";
import {Link} from "react-router-dom";



export const NavBar = () => (
<Navbar>
    <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
        </Navbar.Collapse>
    </Container>
</Navbar>
)