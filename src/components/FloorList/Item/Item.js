import React from 'react';
import './item.scss';

const card = props => {
    return (
        <div className={`card ${props.type}`}>
            <div className="floor">{props.title}</div>
            <div className="floorSpace">{props.space}</div>
            <p className="floorQuantity">Cantidad - Estandar - {props.standardRooms}</p>
            <p className="floorQuantity superior">Cantidad - Superior - {props.superiorRooms}</p>
        </div>
    )
}

export default card;