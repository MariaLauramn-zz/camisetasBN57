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
        name: '',
        type: '',
        size: '',
        color: '',
        cost: '',
        description: '',
        gender: '',
        image: ''
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
        return <Redirect to="/tabla"/>
    }


    return (
      <div className="principal">
      <div className="formDiv">
        <Form onSubmit={handleSubmit} className="styleForm">

            <Form.Group className="mb-2">
                <label>Camiseta</label>
                <input id="name"
                       type="text"
                       name="name"
                       placeholder="Name"
                       value={shirt.name}
                       onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-2">
                <label>Modelo</label>
                <input id="type"
                       type="text"
                       name="type"
                       placeholder="type"
                       value={shirt.type}
                       onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-2">
                <label>Talla</label>
                <input id="size"
                       type="text"
                       name="size"
                       value={shirt.size}
                       placeholder="XS S M XL XXL"
                       onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-2">
                <label>Color</label>
                <input id="color"
                       type="text"
                       name="color"
                       placeholder="color"
                       value={shirt.color}
                       onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-2">
                <label>Precio</label>
                <input id="cost"
                       type="number"
                       name="cost"
                       placeholder="cost"
                       value={shirt.cost}
                       onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-2">
                <label>Descripción</label>
                <input id="description"
                       type="text"
                       name="description"
                       placeholder="description"
                       value={shirt.description}
                       onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-2">
                <label>Género</label>
                <input id="gender"
                       type="text"
                       name="gender"
                       placeholder="gender"
                       value={shirt.gender}
                       onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-2">
                <label>Imagen</label>
                <Form.Control type="file" className="addImage"
                       value={shirt.image}
                       onChange={handleInputChange}
                />
            </Form.Group>


            <button type="submit"
                    onClick={handleSubmit}>
                {locationData.state ? "Update" : "Create"}
            </button>

        </Form>

    </div>
      </div>)
}
