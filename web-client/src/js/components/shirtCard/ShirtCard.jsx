import * as React from 'react';
import "./shirtCard.scss";
import sampleImage from "../assets/BN57.png";
import Link from "@material-ui/core/Link";
import {AddShoppingCart} from "@material-ui/icons";

export const ShirtCard = (props) =>
    <div className="shirt">
        <div className="shirt__img">
            <img src={sampleImage} alt="sampleImage"/>
        </div>
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
