import React from 'react';
import Room from './Room/Room';
import './roomlist.scss';

const roomList = props => {
    return(
        <section className="roomList">
            <Room type="Standard" roomNumber="A-1" remainingTime="30 minutos restantes" intern="200" state="cleaning" />
            <Room type="Standard" roomNumber="A-2" remainingTime="" intern="201" state="free" />
            <Room type="Superior" roomNumber="A-3" remainingTime="2 horas restantes" intern="202" state="ocupied" />
            <Room type="Superior" roomNumber="A-4" remainingTime="" intern="203" state="free" />
            <Room type="Standard" roomNumber="A-5" remainingTime="Tiempo indefinido" intern="204" state="outofservice" />
            <Room type="Superior" roomNumber="A-6" remainingTime="2 horas restantes" intern="205" state="ocupied" />
            <Room type="Standard" roomNumber="A-7" remainingTime="" intern="206" state="free" />
        </section>
    )
}

export default roomList;