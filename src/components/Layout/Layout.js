import React from 'react';
import './layout.scss';
import Nav from '../Nav/Nav';
import AddButton from '../AddButton/AddButon';
import FloorList from '../FloorList/FloorList';
import RoomList from '../RoomList/RoomList';
import CheckIn from '../CheckIn/CheckIn';

const layout = () => {
    return(
        <div className="layout">
            <Nav />
            <main className="container">
            <div className="leftPanel">
                <FloorList />
            </div>
            <section className="rightPanel">
                <CheckIn />
                <AddButton />
            </section>
            </main>
        </div>
    )
}

export default layout;