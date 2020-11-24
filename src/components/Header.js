import React from 'react';
import logo from '../icons/logo.svg';
import arrowleft from '../icons/arrow icons/arrow_left_beige.svg';
import arrowright from '../icons/arrow icons/arrow_right_beige.svg';
import './Header.css';


function Header() {

    return (
        <div className="menu__top">
            <div className="arrow__left">
                <img src={arrowleft} width="10" height="10" alt="Arrowleft" />
            </div>
            <div className="logo__wrapper">
                <img src={logo} width="50" height="50" alt="ForesterLogo" />
            </div>
            <div className="arrow__right">
                <img src={arrowright} width="10" height="10" alt="Arrowright" />
            </div>
        </div>
    )
}

export default Header;