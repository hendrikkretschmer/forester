import React from 'react';
import './PopupContent.css';
import homeicon from '../icons/explore_icon_25x25.svg'


function PopupContent() {

    return (
        <div className="popup__content--wrapper">
            <h4>Fischbeker Heide</h4>
            <img src={homeicon} width="50" height="50" alt="Homeicon" />
            <p>
            Plan your woodventure!
            </p>
        </div>
    )
}

export default PopupContent;