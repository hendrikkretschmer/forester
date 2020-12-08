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

            <div className="headline__container">
            
                <h1>FOREST TREASURES</h1>

                <div className="treasure__image">
                <img src={profileicon} width="50" height="50" alt="Profileicon" />
                </div>
                
                <h2>Explore the woods!</h2>
            
            
            
            <p className="subline__container">
            Click on any treasure item to explore satisfying things to find in the woods!</p>
            
            </div>

            <div className="button__container">

                <div className="button__row--top">
                <button onClick={() => clickMe('Pilze')} className="Pilze">Pilze</button>
                <button onClick={() => clickMe('Tiere')} className="Tiere">Tiere</button>
                <button onClick={() => clickMe('Pilze')} className="Bäume">Bäume</button>
                <button onClick={() => clickMe('Pilze')} className="Kräuter">Kräuter</button>
                </div>
                
                
                <div className="button__row--bottom">
                <button onClick={() => clickMe('Pilze')} className="Pflanzen">Pflanzen</button>
                <button onClick={() => clickMe('Pilze')} className="Snacks">Snacks</button>
                <button onClick={() => clickMe('Pilze')} className="Gewässer">Gewässer</button>
                <button onClick={() => clickMe('Pilze')} className="Moore">Moore</button>
                </div>
            
            </div>
            
            <div className="treasure__container">
                {treasures.map(treasure => (
                    
                    <div className="treasure__card--item"><h3 key={treasure.id}>

                        {treasure.name}<h3/>
                    
                    <p>{treasure.Merkmale}</p>
                    </h3>
                
                    <div className="treasure__card--bottom" key={treasure.id}>
                        <p>{treasure.location}</p>
                    </div>

                </div>

                ))}
            </div>
        </div>
    )
}

export default TreasureNav;