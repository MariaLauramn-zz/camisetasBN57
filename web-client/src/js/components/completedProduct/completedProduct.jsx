import * as React from 'react';
import {Button, ButtonGroup, ButtonToolbar, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import sampleProductImage from "../assets/BN57.png";
import {AddShoppingCart} from "@material-ui/icons";
import "./completedProduct.scss";

export const CompletedProduct = () => (
    <div className="principal">
        <Container>
            <div className="d-flex justify-content-center productContainer">
                <div className="col-12 order-2 col-lg-6 order-lg-1  leftContainer">
                    <img src={sampleProductImage} alt="sampleProductImage"/>
                    <Link>Guía de tallas</Link>
                </div>
                <div className="col-12 order-1 col-lg-6 order-lg-2 col-xl-5 rightContainer">
                    <h1 className="mb-4">BN57</h1>
                    <Form>
                        <Row className="align-items-center mb-4 btnTallas">
                            <Col xs="auto">
                                <ButtonToolbar>
                                    <ButtonGroup>
                                        <Button className="bntTalla" variant="none"> XS</Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button className="bntTalla" variant="none">S</Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button className="bntTalla" variant="none">M</Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button className="bntTalla" variant="none">L</Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button className="bntTalla" variant="none">XL</Button>
                                    </ButtonGroup>
                                </ButtonToolbar>
                            </Col> </Row>

                        <Row className="align-items-center mb-4 btnGenero">
                            <Col xs="auto">
                                <ButtonToolbar>
                                    <ButtonGroup>
                                        <Button className="bntTalla" variant="none">UNISEX</Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button className="bntTalla" variant="none">MUJER</Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button className="bntTalla" variant="none">HOMBRE</Button>
                                    </ButtonGroup>
                                </ButtonToolbar>
                            </Col>
                        </Row>
                        <Row className="align-items-center mb-4 btnColor">
                            <Col xs="auto">
                                <ButtonToolbar>
                                    <ButtonGroup>
                                        <Button className="bntTalla" variant="none">NEGRO</Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button className="bntTalla" variant="none">BLANCO</Button>
                                    </ButtonGroup>
                                </ButtonToolbar>

                                <div className="mt-4 def-number-input number-input">
                                    <button className="minus">-</button>
                                    <input className=" quantity" type="number" value="1" min="1"/>
                                    <button className="plus">+</button>
                                </div>

                            </Col>


                        </Row>
                    </Form>
                    <div className="fw-bold mb-4 fs-1">€20.00</div>
                    <div className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aspernatur cum dolor explicabo sequi tempore. Ab animi corporis eveniet ex expedita impedit
                        possimus quo quod repellat sed sequi suscipit, unde veritatis.
                    </div>
                    <Link className="carro justify-content-end" to="/cart"><AddShoppingCart/></Link>
                </div>
            </div>
        </Container>
    </div>
)
