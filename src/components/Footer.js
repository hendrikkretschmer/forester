import React from 'react';
import homeicon from '../icons/home_icon_25x25.svg';
import exploreicon from '../icons/explore_icon_25x25.svg';
import treasureicon from '../icons/treasure_icon_25x25.svg';
import profileicon from '../icons/profile_icon_25x25.svg';
import './Footer.css';


function Footer() {

    return (
        <footer>
                <ul className="footer__unorderedlist--listitems">
                <li className="footer__listitems--home"><img src={homeicon} width="50" height="50" alt="Homeicon" />Home</li>
                <li className="footer__listitems--explore"><img src={exploreicon} width="50" height="50" alt="Exploreicon" />Explore</li>
                <li className="footer__listitems--treasures"><img src={treasureicon} width="50" height="50" alt="Treasureicon" />Treasures</li>
                <li className="footer__listitems--profile"><img src={profileicon} width="50" height="50" alt="Profileicon" />Profile</li>
                </ul>
        </footer>
    )
}

export default Footer;