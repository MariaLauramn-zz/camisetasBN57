import * as React from 'react';
import "./formularioCliente.scss";
import {Form} from "react-bootstrap";
import masterCard from '../assets/mastercard.png';
import paypal from '../assets/paypal.png';
import visa from '../assets/visa.png';
import bank from '../assets/bank.png';
import {Link} from "react-router-dom";

export const FormularioCliente = () => (

    <div className="principal">
        <h5>Datos de confirmación de la compra</h5>
        <div className="formDiv">

            <Form className="styleForm">

                <Form.Group className="mb-2">
                    <label>Nombre:</label>
                    <input id="name"
                           type="text"
                           name="name"
                           placeholder="Name"
                    />
                </Form.Group>

                <Form.Group className="mb-2">
                    <label>Apellidos:</label>
                    <input id="apellido"
                           type="text"
                           name="apellido"
                           placeholder="Apellido"
                    />
                </Form.Group>

                <Form.Group className="mb-2">
                    <label>Móvil</label>
                    <input id="movil"
                           type="number"
                           name="size"
                           placeholder="XXX XX XX XX"
                    />
                </Form.Group>

                <Form.Group className="mb-2">
                    <label>E-mail</label>
                    <input id="email"
                           type="email"
                           name="email"
                           placeholder="example@gmail.com"
                    />
                </Form.Group>

                <Form.Group className="mb-2">
                    <label>Dirección envío</label>
                    <input id="direccionEnvio"
                           type="text"
                           name="direccionEnvio"
                           placeholder="dirección envío"
                    />

                </Form.Group>

                <Form.Group className="mb-2">
                    <label>Código postal</label>
                    <input id="codigoPostal"
                           type="text"
                           name="codigoPostal"
                           placeholder="xxxxx"
                    />

                </Form.Group>

                <Form.Group className="mb-2">
                    <label>Dirección facturación</label>
                    <input id="direccionFactura"
                           type="text"
                           name="direccionFactura"
                           placeholder="Dirección facturación"
                    />

                </Form.Group>

                <Form.Group className="mb-2">
                    <label>Métodos de pago</label>
                    <div className="metodos">
                        <img src={paypal} alt="Paypal"/>
                        <img src={masterCard} alt="Mastercard"/>
                        <img src={visa} alt="Visa"/>
                        <img src={bank} alt="Cuenta bancaria"/>
                    </div>
                </Form.Group>

                <div>
                    <button className="pago">
                        <Link to="/">Pagar</Link>
                    </button>
                </div>
            </Form>

        </div>
    </div>
)