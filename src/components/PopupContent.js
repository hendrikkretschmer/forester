import React from 'react';
import './PopupContent.css';


function PopupContent({forest}) {

    return (
        <div className="popup__content--wrapper">
            <h4>{forest.name}</h4>
            <div className="popup__image--wrapper">
            <img src={forest.img} width="150" height="100" alt="Homeicon" />
            </div>
            <p className="popup__paragraph">
            {forest.text}
            </p>
        </div>
    )
}

export default PopupContent;