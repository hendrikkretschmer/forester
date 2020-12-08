import React, { useEffect, useState } from 'react';
import './TreasureNav.css';
import profileicon from '../icons/profile_icon_25x25.svg';
import TreasureData from './TreasureData';

function TreasureNav() {

    const [treasures, setTreasures] = useState([]);

    useEffect(() => {
        setTreasures(TreasureData)
    }, []); // dependency array: empty array -> run once

    function clickMe(category){
        setTreasures(TreasureData.filter(treasure => treasure.treasure === category))
    }

    return(
        <div>
            <div>
                <img src={profileicon} width="50" height="50" alt="Profileicon" />
            </div>

            <h1>TREASURES TO EXPLORE</h1>
            <h2>Hunt for Treasures in the woods!</h2>
            <p>Wanna know where to find forest treasures nearby?
            Click on any treasure item to explore satisfying things to find in the woods!</p>
            <button onClick={() => clickMe('Pilze')} className="Pilze">Pilze</button>
            <button onClick={() => clickMe('Tiere')} className="Tiere">Tiere</button>
            <button onClick={() => clickMe('Bäume')} className="Bäume">Bäume</button>
            <button onClick={() => clickMe('Kräuter')} className="Kräuter">Kräuter</button>
            <button onClick={() => clickMe('Pflanzen')} className="Pflanzen">Pflanzen</button>

            <div>
                {treasures.map(treasure => (
                    <p key={treasure.id}>
                        {treasure.name}<br/>
                        <small>{treasure.Merkmale}</small>
                    </p>
                ))}
            </div>
        </div>
    )
}

export default TreasureNav;