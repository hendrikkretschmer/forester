import React from 'react';
import logo from '../icons/logo.svg';
import arrowleft from '../icons/arrow-icons/arrow_icon_left_white.svg';
import arrowright from '../icons/arrow-icons/arrow_icon_right_white.svg';
import './Header.css';

import {BrowserRouter as Router, useHistory} from 'react-router-dom';


function Header() {
    const history= useHistory();

    const handleHistory = () => {
        history.push("/");
    }
    return (
        <Router>
        <div className="menu__top">
            <div className="arrow__icon--left">
                <button onClick={handleHistory}className="button__left--history">
                    <img className="arrow__img--left" src={arrowleft} width="10" height="10" alt="arrow__icon--left" />
                </button>
            </div>
            
            <div className="logo__wrapper">
                <img src={logo} width="50" height="50" alt="ForesterLogo" />
            </div>
            
            <div className="arrow__icon--right">
                <img className="arrow__img--right" src={arrowright} width="10" height="10" alt="arrow__icon--right" />
            </div>
        </div>
        </Router>
    )
}

export default Header;