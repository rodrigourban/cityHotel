import React from 'react';
import Item from './Item/Item'

const floorList = props => {
    return (
        <div>
            <Item type="normal" title="PISO A" space="8/20" standardRooms="4/10" superiorRooms="4/10" />
            <Item type="half" title="PISO B" space="15/20" standardRooms="10/10" superiorRooms="5/10" />
            <Item type="full" title="PISO C" space="20/20" standardRooms="10/10" superiorRooms="10/10" />
        </div>
    )
}

export default floorList;