import React from 'react';
import logo from '../icons/logo.svg';
import './Header.css';


function Header() {

    return (
        <div className="menu__top">
            <div className="logo__wrapper">
                <img src={logo} width="50" height="50" alt="ForesterLogo" />
            </div>
        </div>
    )
}

export default Header;