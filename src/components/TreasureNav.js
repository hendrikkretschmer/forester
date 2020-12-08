import React, { useEffect, useState } from 'react';
import './TreasureNav.css';
import treasureicon from '../icons/map-icons-beige/svg/004-treasure-map.svg';
import treasuresicon from '../icons/treasure_icon_25x25.svg';
import treasureitem from '../icons/map-icons-beige/svg/005-treasure-map-1.svg';
import exploreicon from '../icons/explore_icon_25x25.svg';
import TreasureData from './TreasureData';

function TreasureNav() {
  const [treasures, setTreasures] = useState([]);

  useEffect(() => {
    setTreasures(TreasureData);
  }, []); // dependency array: empty array -> run once

  function clickMe(category) {
    setTreasures(TreasureData.filter((treasure) => treasure.treasure === category));
  }

  return (
    <div>
      <div className="headline__container">
        <div className="treasure__image">
          <img src={treasureicon} width="160" height="160" alt="TreasureIcon" />
        </div>

        <h1>Forest Treasures!</h1>

        <p className="subline__container">Click on any item to explore treasures!</p>
      </div>

      <div className="button__container">
        <div className="button__row--top">
          <button onClick={() => clickMe('Pilze')} className="Pilze">
            <img src={treasuresicon} width="40" height="40" alt="TreasureIcon" />
          </button>
          <button onClick={() => clickMe('Tiere')} className="Tiere">
            <img src={treasuresicon} width="40" height="40" alt="TreasureIcon" />
          </button>
          <button onClick={() => clickMe('Bäume')} className="Bäume">
            <img src={treasuresicon} width="40" height="40" alt="TreasureIcon" />
          </button>
          <button onClick={() => clickMe('Kräuter')} className="Kräuter">
            <img src={treasuresicon} width="40" height="40" alt="TreasureIcon" />
          </button>
        </div>

        <div className="button__row--bottom">
          <button onClick={() => clickMe('Pflanzen')} className="Pflanzen">
            <img src={treasuresicon} width="40" height="40" alt="TreasureIcon" />
          </button>
          <button onClick={() => clickMe('Snacks')} className="Snacks">
            <img src={treasuresicon} width="40" height="40" alt="TreasureIcon" />
          </button>
          <button onClick={() => clickMe('Gewässer')} className="Gewässer">
            <img src={treasuresicon} width="40" height="40" alt="TreasureIcon" />
          </button>
          <button onClick={() => clickMe('Moore')} className="Moore">
            <img src={treasuresicon} width="40" height="40" alt="TreasureIcon" />
          </button>
        </div>
      </div>

      <div className="treasure__container">
        {treasures.map((treasure) => (
          <div className="treasure__card--item">
            
            <div className="iconheadline">
              <img
              className="eichel__icon"
              src={treasuresicon}
              width="20"
              height="20"
              alt="treasureicon"
            />
            <p className="treasure__category--headline" key={treasure.id}>{treasure.name}</p>
            </div>
            <p>{treasure.Merkmale}</p>

            <div className="treasure__card--bottom" key={treasure.id}>


              <div className="location__icon--wrapper">
                <img
                  className="location__icon"
                  src={exploreicon}
                  width="25"
                  height="25"
                  alt="locationicon"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TreasureNav;
