import * as React from "react"
import {Container, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ShirtApi} from "../../api/ShirtApi";
import  "./shirtTable.scss";

export const ShirtTable = (props) => {
    return (

        <div className= "principal">
        <Container>
            <button className="buttonCreate">
                <Link to="/add">Crear camiseta</Link>
            </button>

    <Table striped bordered hover>
        <thead>
        <tr>
            <th>Camiseta</th>
            <th>Modelo</th>
            <th>Talla</th>
            <th>Color</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Género</th>
            <th>Imagen</th>
        </tr>
        </thead>
        <tbody>
        {props.shirts.map(shirt =>
            <tr key={shirt.id}>
                <td>{shirt.name}</td>
                <td>{shirt.type}</td>
                <td>{shirt.size}</td>
                <td>{shirt.color}</td>
                <td>{shirt.cost}</td>
                <td>{shirt.description}</td>
                <td>{shirt.gender}</td>
                <td>{shirt.image}</td>

                <td>
                    <button
                        onClick={() =>
                            new ShirtApi()
                                .deleteShirtById(shirt.id)
                                .then(props.onDeleteSuccess)
                        }>
                        ❌
                    </button>
                    <Link
                        to={{
                            pathname: `/edit/${shirt.id}`,
                            state: { shirt: shirt, isUpdate: true }
                        }}>
                        <button>✏️</button>
                    </Link>
                </td>
            </tr>)}
        </tbody>
    </Table>
</Container>
    </div>)
}
