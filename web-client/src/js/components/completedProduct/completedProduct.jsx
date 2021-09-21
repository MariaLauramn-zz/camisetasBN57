import * as React from 'react';
import {Button, ButtonGroup, ButtonToolbar, Col, Container, Form, Row} from "react-bootstrap";
import "./completedProduct.scss"
import {Link} from "react-router-dom";
import sampleProductImage from "../assets/BN57.png";
import {AddShoppingCart} from "@material-ui/icons";

export const CompletedProduct = () => (
    <div className="principal">
        <Container>
            <div className="d-flex">
                <div className="order-1 leftContainer">
                    <img src={sampleProductImage} alt="sampleProductImage"/>
                    <Link>Guía de tallas</Link>
                </div>
                <div className="order-2 rightContainer">
                    <h1 className="mb-4">BN57</h1>
                    <Form>
                        <Row className="align-items-center btnTallas">
                            <Col xs="auto">
                                <ButtonToolbar>
                                    <ButtonGroup>
                                        <Button variant="light"> XS</Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button variant="light">S</Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button variant="light">M</Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button variant="light">L</Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button variant="light">XL</Button>
                                    </ButtonGroup>
                                </ButtonToolbar>
                            </Col> </Row>

                        <Row className="align-items-center btnGenero">
                            <Col xs="auto">
                                <ButtonToolbar>
                                    <ButtonGroup>
                                        <Button variant="light">UNISEX</Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button variant="light">MUJER</Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button variant="light">HOMBRE</Button>
                                    </ButtonGroup>
                                </ButtonToolbar>
                            </Col>
                        </Row>
                        <Row className="align-items-center btnColor">
                            <Col xs="auto">
                                <ButtonToolbar>
                                    <ButtonGroup>
                                        <Button variant="light">NEGRO</Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button variant="light">BLANCO</Button>
                                    </ButtonGroup>
                                </ButtonToolbar>
                                <input type="number" value="1" min="1"/>

                            </Col>


                        </Row>
                    </Form>
                    <div className="font-weight-light">€20.00</div>
                    <div className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aspernatur cum dolor explicabo sequi tempore. Ab animi corporis eveniet ex expedita impedit
                        possimus quo quod repellat sed sequi suscipit, unde veritatis.
                    </div>
                    <Link className="carro" to="/cart"><AddShoppingCart/></Link>
                </div>
            </div>
        </Container>
    </div>
)