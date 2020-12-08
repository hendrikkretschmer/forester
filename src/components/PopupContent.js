import React from 'react';
import './PopupContent.css';
import forest_fog2 from '../images/forest_fog2.jpg';


function PopupContent() {

    return (
        <div className="popup__content--wrapper">
            <h4>Fischbeker Heide</h4>
            <div className="popup__image--wrapper">
            <img src={forest_fog2} width="150" height="100" alt="Homeicon" />
            </div>
            <p className="popup__paragraph">
            Plan your woodventure! Explore satifying Forest Treasures!
            </p>
        </div>
    )
}

export default PopupContent;