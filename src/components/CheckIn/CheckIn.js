import React from 'react';
import './checkin.scss';
import Door from '../../assets/Door.svg';
import Back from '../../assets/Back.svg';
import People from '../../assets/People.svg';
import PeopleCard from '../../assets/PeopleCard.svg';
import Button from './Button/Button';

const checkin = props => {
    return(
    <section className="checkin">
        <div className="back">
            <img src={Back} />
        </div>
        <div className="specs">
            <div className="specs-inline">
                <div>A-4</div>
                <div><img src={Door}/>ESTANDAR ($17599)</div>
                <div><img src={PeopleCard}/>200</div>
                <div><img src={People}/>2/2</div>
            </div>
            <div className="status">LIBRE</div>
        </div>
        <div className="passengers">
            <div className="mainPassenger">
                <input type="checkbox" id="fruit1" name="fruit-1" value="Apple" />
                <label for="fruit1">Menta Claudia</label>
            </div>
            <ul className="dependantPassenger">
                <li>
                    <input type="checkbox" id="fruit1" name="fruit-1" value="Apple" />
                    <label for="fruit1">Huck Marcelo</label>
                </li>
                <li>
                    <input type="checkbox" id="fruit1" name="fruit-1" value="Apple" />
                    <label for="fruit1">Pedro Lemo</label>
                </li>
                <li>
                    <input type="checkbox" id="fruit1" name="fruit-1" value="Apple" />
                    <label for="fruit1">Pablo Kaniesky</label>
                </li>
                <li>
                    <input type="checkbox" id="fruit1" name="fruit-1" value="Apple" />
                    <label for="fruit1">Palacio Santiago</label>
                </li>
            </ul>
        </div>
        <div className="actionButtons">
            <Button>CHECK-IN</Button>
        </div>
    </section>
    )
}

export default checkin;
