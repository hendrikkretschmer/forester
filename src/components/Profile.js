import React from 'react';
import './Profile.css';
import homeicon from '../icons/home_icon_25x25.svg';


function Profile() {

    return (
        <div>
            <div className="container__profile--picture">
            <img src={homeicon} width="50" height="50" alt="Homeicon" />
            </div>
            <div className="container__username--headline2">
                <h2>Username</h2>
            </div>
        </div>
    )
}

export default Profile;