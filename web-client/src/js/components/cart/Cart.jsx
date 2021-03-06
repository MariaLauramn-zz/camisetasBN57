import * as React from 'react';
import "./cart.scss";
import {Container} from "react-bootstrap";
import sampleImage from "../assets/BN57.png";
import {Link} from "react-router-dom";

export const Cart = () => (
    <div className="principal">
        <div className="totalPedido">
            <div>
                <p>Total + IVA: &euro; 55</p>
            </div>
            <div className="totalPedido__makeOrder">
                <button className= "totalPedido__makeOrder__button">
                    <Link to="/formularioCliente">Realizar pedido</Link>
                </button>
            </div>
        </div>
        <Container>
            <div className="cartList">
                <div className="cart">
                    <div className="cart__img">
                        <img src={sampleImage} alt="sampleImage"/>
                        <div className="cart__info">
                            <button className="cart__info__Remove">X</button>
                            <div className="cart__info__Name">Remove before flight</div>
                            <div className="cart__info__Type">Tipo: Vintage</div>
                            <div className="cart__info__Size">Talla: M</div>
                            <div className="cart__info__Color">Color: Black</div>
                            <div className="cart__info__Quantity">Cantidad: 1</div>
                            <div className="cart__info__Gender">Mujer</div>
                            <div className="cart__info__Cost">&euro;  20</div>
                        </div>
                    </div>
                </div>
                <div className="cart">
                    <div className="cart__img">
                        <img src={sampleImage} alt="sampleImage"/>
                        <div className="cart__info">
                            <button className="cart__info__Remove">X</button>
                            <div className="cart__info__Name">Cabin crew</div>
                            <div className="cart__info__Type">Tipo: Travel</div>
                            <div className="cart__info__Size">Talla: XS</div>
                            <div className="cart__info__Color">Color: White</div>
                            <div className="cart__info__Quantity">Cantidad: 1</div>
                            <div className="cart__info__Gender">Unisex</div>
                            <div className="cart__info__Cost">&euro; 35</div>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    </div>
)