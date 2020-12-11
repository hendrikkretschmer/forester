import React from 'react';
import './Explore.css';
import Map from './Map';
import forestData from './ForestData';


function Explore() {

    return (
        <div>
            <Map forests={forestData}/>
        </div>
    )
}

export default Explore;