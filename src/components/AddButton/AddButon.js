import React from 'react';
import './addbutton.scss';

const addButton = () => {

    const addPerson = () => {
        console.log("El boton fue clickeado");
    }

    return(
        <button className="addButton" onClick={() => addPerson()}>
            <i class="material-icons">
                person_add
            </i>
        </button>
    )
}

export default addButton;