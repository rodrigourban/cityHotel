import React from 'react';
import logo from '../../assets/logo.svg';
import admin from '../../assets/admin.svg';
import adminarrow from '../../assets/adminarrow.svg';
import './nav.scss';

const navigation = props => {
    return (
    <nav className="navigation">
        <div className="logo">
            <img src={logo} className="logoImage" />
        </div>
        <div className="middleNav">
            <div>
                <a href="#" className="navButton">PERSONAS</a>
            </div>
            <div>
                <a href="#" className="navButton">CREAR RESERVA</a>
            </div>
            <div>
                <a href="#" className="navButton">TABLERO</a>
            </div>
            <div>
                <a href="#" className="navButton">CALCULAR PRECIO</a>
            </div>
        </div>
        <div className="userNav">
            <img src={admin} />
            <p className="userName">Administrador</p>
            <img src={adminarrow} />
        </div>
    </nav>
)}

export default navigation;