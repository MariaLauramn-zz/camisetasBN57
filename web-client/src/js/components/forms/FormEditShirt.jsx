import React, { useState, useEffect } from 'react';

export const FormEditShirt = (props) => {
    const [shirt, setShirt] = useState(props.shirtActual);

    useEffect(() => {
        setShirt(props.shirtActual);
    }, [props]);

    const gestionarCampo = (event) => {
        const { name, value } = event.target;
        setShirt({ ...shirt, [name]: value });
    }

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                props.actualizarShirt(shirt.id, shirt);
            }}
        >
            <div className="form-group">
                <label>Nombre camiseta</label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={name.name}
                    onChange={gestionarCampo}
                />
            </div>
            <div className="form-group">
                <label>Talla</label>
                <input
                    type="text"
                    name="size"
                    className="form-control"
                    value={shirt.size}
                    onChange={gestionarCampo}
                />
            </div>
            <div className="form-group">
                <button className="btn btn-danger">Actualizar camiseta</button>
                <button
                    className="btn btn-primary ml-2"
                    onClick={() => props.setEditando(false)}
                >
                    Cancelar
                </button>
            </div>
        </form>
    )
}