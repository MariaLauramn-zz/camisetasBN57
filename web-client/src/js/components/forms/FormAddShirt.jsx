import * as React from "react";
import {useState} from "react";

export const FormAddShirt = (props) => {

    const estadoInicialFormulario = {id: null, name: '', size: ''};
    const [shirt, setShirt] = useState(estadoInicialFormulario);

    const gestionarCampo = (event) => {
        const {name, value} = event.target;
        setShirt({...shirt, [name]: value});
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                if (!shirt.name || !shirt.size) return;

                props.agregarShirt(shirt);
                setShirt(estadoInicialFormulario);
            }}
        >
            <div className="form-group">
                <label>Nombre camiseta</label>
                <input
                    id="name"
                    className="form-control"
                    type="text"
                    name="name"
                    value={shirt.name}
                    onChange={gestionarCampo}
                />
            </div>
            <div className="form-group">
                <label>Talla</label>
                <input
                    id="size"
                    className="form-control"
                    type="text"
                    name="size"
                    value={shirt.size}
                    onChange={gestionarCampo}
                />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Añadir camiseta</button>
            </div>
        </form>

    )
}