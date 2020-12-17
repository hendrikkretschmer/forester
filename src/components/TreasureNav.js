import React, { useEffect, useState } from 'react';
import { Browserrouter as Router, Switch, Route, Link} from 'react-router-dom';
import './TreasureNav.css';
import treasureicon from '../icons/map-icons-beige/svg/004-treasure-map.svg';
import animalicon from '../icons/treasureicons/animalicon2.svg';
import treeicon from '../icons/treasureicons/treeicon5.svg';
import snackicon from '../icons/treasureicons/snackicon1.svg';
import wassericon from '../icons/treasureicons/wassericon4.svg';
import pilzicon from '../icons/treasureicons/pilzicon2.svg';
import herbsicon from '../icons/treasureicons/herbsicon1.svg';
import planticon from '../icons/treasureicons/herbsicon2.svg';
import mooricon from '../icons/treasureicons/watericon2.svg';
import treasuresicon from '../icons/treasure_icon_25x25.svg';
import exploreicon from '../icons/explore_icon_25x25.svg';
import bookmark from '../icons/treasureicons/bookmark_darkgreen1.svg';
import TreasureData from './TreasureData';




function TreasureNav() {
  const [treasures, setTreasures] = useState([]);

  useEffect(() => {
   // setTreasures(TreasureData);
  }, []); // dependency array: empty array -> run once

  function clickMe(category) {
    setTreasures(TreasureData.filter((treasure) => treasure.treasure === category));
  }

  return (
  <div className="treasure__wrapper--top">
      <div className="treasure__headline--container">
        
        <div className="treasure__image">
          <img src={treasureicon} width="160" height="160" alt="TreasureIcon" />
        </div>

        <h1 className="treasure__headline">Forest Treasures!</h1>

        <p className="treasure__subline--container">Click on any item to explore treasures!</p>
      </div>

      <div className="treasure__button--container">
        <div className="treasure__buttonrow--top">
          <button onClick={() => clickMe('Pilze')} className="treasure__button">
            <img src={pilzicon} width="40" height="40" alt="TreasureIcon" />
          </button>
          <button onClick={() => clickMe('Tiere')} className="treasure__button">
            <img src={animalicon} width="40" height="40" alt="TreasureIcon" />
          </button>
          <button onClick={() => clickMe('Bäume')} className="treasure__button">
            <img src={treeicon} width="40" height="40" alt="TreasureIcon" />
          </button>
          <button onClick={() => clickMe('Kräuter')} className="treasure__button">
            <img src={herbsicon} width="40" height="40" alt="TreasureIcon" />
          </button>
        </div>

        <div className="treasure__buttonrow--bottom">
          <button onClick={() => clickMe('Pflanzen')} className="treasure__button">
            <img src={planticon} width="40" height="40" alt="TreasureIcon" />
          </button>
          <button onClick={() => clickMe('Snacks')} className="treasure__button">
            <img src={snackicon} width="40" height="40" alt="TreasureIcon" />
          </button>
          <button onClick={() => clickMe('Gewässer')} className="treasure__button">
            <img src={wassericon} width="40" height="40" alt="TreasureIcon" />
          </button>
          <button onClick={() => clickMe('Moore')} className="treasure__button">
            <img src={mooricon} width="40" height="40" alt="TreasureIcon" />
          </button>
        </div>
      </div>

      <div className="treasure__container">
        {treasures.map((treasure) => (
          <div className="treasure__card--item">
            
            <div className="iconheadline">
              <div className="eichel__icon--wrapper">
              <img
              className="eichel__icon"
              src={treasuresicon}
              alt="treasureicon"
              />
            </div>
            <p className="treasure__category--headline" key={treasure.id}>{treasure.name}</p>
            </div>
            
            <div className="treasure__image">
              <img src={treasure.img} className="treasure__image--item" /*width="285" height="170"*/ />
            </div>
            
            <div className="treasure__location--wrapper">
            
            <div className="location__icon--wrapper">
              <Link to={`/treasurepage/${treasure.treasure.toLowerCase()}/${treasure.id}`}>
                <img
                  className="location__icon"
                  src={bookmark}
                  width="20"
                  height="20"
                  alt="locationicon"
                />
               </Link>
             </div>

              <div className="location__icon--wrapper">
              <Link to={`/treasurepage/${treasure.treasure.toLowerCase()}/${treasure.id}`}>
                <img
                  className="location__icon"
                  src={exploreicon}
                  width="30"
                  height="30"
                  alt="locationicon"
                />
               </Link>
             </div>

             

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TreasureNav;
