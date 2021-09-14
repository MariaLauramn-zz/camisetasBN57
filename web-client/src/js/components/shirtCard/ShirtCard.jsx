import * as React from 'react';
import "./shirtCard.scss";
import sampleImage from "../../../imagenes/CABIN CREW.png";
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
                <div className="shirt__info__Contenido__Categoria">{props.shirt.size}</div>
            </div>

            <div className="shirt__info__Cost">
                <div>&euro; {props.shirt.cost}</div>
            </div>

        </div>
        <div className="shirt__buttons">
            <Link className="carro" href="" ><AddShoppingCart/></Link>

        </div>


    </div>
