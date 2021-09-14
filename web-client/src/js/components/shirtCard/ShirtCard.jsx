import * as React from 'react';
import "./shirtCard.scss";
import sampleImage from "../../../imagenes/CABIN CREW.png";

export const ShirtCard = (props) =>
    <div className="shirt">
        <div className="shirt__img">
            <img src={sampleImage} alt="sampleImage"/>
        </div>
        <div className="shirt__info">
            <div className="shirt__info__Name">{props.shirt.name}</div>
            <div className="shirt__info__Categoria">{props.shirt.size}</div>
            <div className="shirt__infoCost">
                <div>&euro; {props.shirt.cost}</div>
            </div>

        </div>
        <div className="shirt__buttons">

        </div>


    </div>