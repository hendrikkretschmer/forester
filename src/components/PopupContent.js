import React from 'react';
import './PopupContent.css';
import infoicon from '../icons/treasureicons/treeicon1.svg';
import bookmark from '../bookmarks/bookmark_darkgreen4.svg';
import { Link } from 'react-router-dom';

function PopupContent({forest}) {
    return (
        <div className="popup__content--wrapper">
            <h4 className="popup-title">{forest.name}</h4>
            <div className="popup__image--wrapper">
            <img width="170" height="100" src={forest.img} alt="Homeicon" />
            </div>

            <div className="popup__button--wrapper">
                <button className="popup__button--info">
                    <img src={bookmark} className="popup__button--bookmark" alt="info__icon"/>
                </button>
                <button className="popup__button--info">
                    <Link to={`/forestpage/${forest.id}`}>
                        <img src={infoicon} className="popup__button--icon" alt="info__icon"/>
                    </Link>
                </button>
                
            </div>
        </div>
    )
}

export default PopupContent;