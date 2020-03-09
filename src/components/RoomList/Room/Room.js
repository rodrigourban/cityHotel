import React from 'react';
import './room.scss'

const room = props => {
    return(
        <div className={`room ${props.state}`}>
            <div className="title">{props.type}</div>
            <div className="">{props.intern}</div>
            <div className="roomNumber">{props.roomNumber}</div>
            <div className="remainingTime">{props.remainingTime}</div>
        </div>
    )
}

export default room;