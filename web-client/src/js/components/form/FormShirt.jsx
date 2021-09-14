import * as React from "react"
import {useDebugValue, useState} from "react";
import {Form} from "react-bootstrap";
import {ShirtApi} from "../../api/ShirtApi";
import {Redirect, useLocation, useParams} from "react-router-dom";
import './formShirt.scss';


export const FormShirt = (props) => {

    const locationData = useLocation()

    const [enviado, setEnviado] = useState(false)

    const [shirt, setShirt] = useState(locationData.state?.shirt || {
        name: "",
        type: "",
        size: "",
        color: "",
        cost: ""

    }
    )


    const handleInputChange = (event) => {
        setShirt({
            ...shirt,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const shirtApi = new ShirtApi()
        shirtApi
            .createShirt(shirt)
            .then(() => setEnviado(true))
            .then(props.onSuccess)

    }
    if (enviado) {
        return <Redirect to="/"/>
    }


    return (<div className="formDiv">
        <Form onSubmit={handleSubmit} className="styleForm">

            <Form.Group className="mb-3">
                <label>Camiseta</label>
                <input id="name"
                       type="text"
                       name="name"
                       placeholder="Name"
                       value={shirt.name}
                       onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <label>Modelo</label>
                <input id="type"
                       type="text"
                       name="type"
                       placeholder="type"
                       value={shirt.type}
                       onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <label>Talla</label>
                <input id="size"
                       type="text"
                       name="size"
                       value={shirt.size}
                       placeholder="0"
                       onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <label>Color</label>
                <input id="color"
                       type="text"
                       name="color"
                       placeholder="color"
                       value={shirt.color}
                       onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <label>Precio</label>
                <input id="cost"
                       type="number"
                       name="cost"
                       placeholder="cost"
                       value={shirt.cost}
                       onChange={handleInputChange}
                />
            </Form.Group>


            <button type="submit"
                    onClick={handleSubmit}>
                {locationData.state ? "Update" : "Create"}
            </button>

        </Form>

    </div>)
}