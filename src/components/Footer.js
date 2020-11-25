import React from 'react';
import homeicon from '../icons/home_icon_25x25.svg';
import exploreicon from '../icons/explore_icon_25x25.svg';
import treasureicon from '../icons/treasure_icon_25x25.svg';
import profileicon from '../icons/profile_icon_25x25.svg';
import { NavLink } from 'react-router-dom';
/* import { Link } from 'react-router-dom'; */
import './Footer.css';


function Footer() {

    return (
        <footer>
                <nav className="navbar__bottom">
                <ul className="footer__unorderedlist--listitems">
                    
                    <NavLink exact to='/' className="home__link" activeclassName="home__link--active">
                        <li className="footer__listitems--home">
                            <img src={homeicon} width="50" height="50" alt="Homeicon" />
                            Home
                        </li>
                    </NavLink>

                    <NavLink exact to='/explore' className="explore__link" activeclassName="explore__link--active">
                        <li className="footer__listitems--explore">
                            <img src={exploreicon} width="50" height="50" alt="Exploreicon" />
                            Explore
                        </li>
                    </NavLink>

                    <NavLink exact to='/treasures' className="treasures__link" activeclassName="treasures__link--active">
                        <li className="footer__listitems--treasures">
                            <img src={treasureicon} width="50" height="50" alt="Treasureicon" />
                            Treasures
                        </li>
                    </NavLink>

                    <NavLink exact to='/profile' className="profile__link" activeclassName="profile__link--active">
                        <li className="footer__listitems--profile">
                            <img src={profileicon} width="50" height="50" alt="Profileicon" />
                            Profile
                        </li>
                    </NavLink>
                </ul>
                </nav>
        </footer>
    )
}

export default Footer;