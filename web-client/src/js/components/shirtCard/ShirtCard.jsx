import * as React from 'react';
import "./shirtCard.scss";
import sampleImage from "../../../imagenes/BN57 siluetada (1).png";
export const ShirtCard = (props) =>
    <div className="shirt">
        <div className="shirt__img">
            <img src={sampleImage} alt="sampleImage"/>
        </div>
        <div className="shirt__info">
            <div>{props.shirt.name}</div>
            <div>{props.shirt.size}</div>
            <div>{props.shirt.cost}</div>
        </div>
        <div className="shirt__buttons">
            
        </div>


    </div>