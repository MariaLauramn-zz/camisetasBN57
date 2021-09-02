import * as React from 'react';

export const ShirtCard = (props) =>
    <div className="shirt">
        <div>{ props.shirt.name }</div>
        <div>{ props.shirt.size}</div>
        <div>{ props.shirt.color}</div>
        <div>{ props.shirt.price}</div>
    </div>