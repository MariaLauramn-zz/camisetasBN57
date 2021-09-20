import * as React from "react";
import './login.scss';
import {Button, Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

export const Login = () => {
    return (
        <div className="principal">
            <Container>
                <Form className="mx-auto col-4  shadow-lg d-flex flex-column rounded ">
                    <Form.Group className="mx-4 mt-4 pt-4" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control className="" type="text" placeholder="Enter username"/>

                    </Form.Group>
                    <Form.Group className="mx-4 my-4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                    <Form.Group className="mx-4 d-flex justify-content-between flex-wrap" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me"/>
                        <Link className="form-text small text-muted" href="#">Forgot your password?</Link>
                    </Form.Group>
                    <Form.Group className="mx-4 my-4 pb-4 d-flex justify-content-end
"><Link to="/tabla">
                        <Button variant="dark" type="submit">
                            Enviar
                        </Button>
                    </Link>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    )
}
