import React from 'react';
import './button.scss';

const button = props => {
    return(
        <button className="checkinButton">
            {props.children}
        </button>
    )
}

export default button;