import React from 'react';
import logo from '../icons/logo.svg';
import arrowleft from '../icons/arrow icons/arrow_icon_left_white.svg';
import arrowright from '../icons/arrow icons/arrow_icon_right_white.svg';
import './Header.css';


function Header() {

    return (
        <div className="menu__top">
            <div className="arrow__icon--left">
                <img className="arrow__img--left" src={arrowleft} width="10" height="10" alt="arrow__icon--left" />
            </div>
            
            <div className="logo__wrapper">
                <img src={logo} width="50" height="50" alt="ForesterLogo" />
            </div>
            
            <div className="arrow__icon--right">
                <img className="arrow__img--right" src={arrowright} width="10" height="10" alt="arrow__icon--right" />
            </div>
        </div>
    )
}

export default Header;