import React, { useEffect, useState } from 'react';
import './TreasureNav.css';
import treasureicon from '../icons/treasure_icon_25x25.svg';
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

                <div className="treasure__image">
                <img src={treasureicon} width="200" height="200" alt="TreasureIcon" />
                </div>
                
                <h1>Forest Treasures!</h1>
            
            
            
            <p className="subline__container">
            Explore the woods! Click on any item to explore treasures!</p>
            
            </div>

            <div className="button__container">

                <div className="button__row--top">
                <button onClick={() => clickMe('Pilze')} className="Pilze">
                    <img src={treasureicon} width="40" height="40" alt="TreasureIcon" />
                </button>
                <button onClick={() => clickMe('Tiere')} className="Tiere">
                    <img src={treasureicon} width="40" height="40" alt="TreasureIcon" />
                </button>
                <button onClick={() => clickMe('Pilze')} className="Bäume">
                    <img src={treasureicon} width="40" height="40" alt="TreasureIcon" />
                </button>
                <button onClick={() => clickMe('Pilze')} className="Kräuter">
                    <img src={treasureicon} width="40" height="40" alt="TreasureIcon" />
                </button>
                </div>
                
                
                <div className="button__row--bottom">
                <button onClick={() => clickMe('Pilze')} className="Pflanzen">
                    <img src={treasureicon} width="40" height="40" alt="TreasureIcon" />
                </button>
                <button onClick={() => clickMe('Pilze')} className="Snacks">
                    <img src={treasureicon} width="40" height="40" alt="TreasureIcon" />
                </button>
                <button onClick={() => clickMe('Pilze')} className="Gewässer">
                    <img src={treasureicon} width="40" height="40" alt="TreasureIcon" />
                </button>
                <button onClick={() => clickMe('Pilze')} className="Moore">
                    <img src={treasureicon} width="40" height="40" alt="TreasureIcon" />
                </button>
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