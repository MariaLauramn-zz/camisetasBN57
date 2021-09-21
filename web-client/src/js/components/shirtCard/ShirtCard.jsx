import * as React from 'react';
import "./shirtCard.scss";
import sampleImage from "../../../imagenes/CABIN CREW.png";
import {Link} from "react-router-dom";

export const ShirtCard = (props) =>

    <div className="shirt">
        <Link to="/BN57">
            <div className="shirt__img">
                <img src={sampleImage} alt="sampleImage"/>
            </div>
        </Link>
        <div className="shirt__info">
            <div className="shirt__info__Contenido">
                <div className="shirt__info__Contenido__Name">{props.shirt.name}</div>
                <div className="shirt__info__Contenido__Categoria">{props.shirt.type}</div>
            </div>

            <div className="shirt__info__Cost">
                <div>&euro; {props.shirt.cost}</div>
            </div>
        </div>
    </div>

