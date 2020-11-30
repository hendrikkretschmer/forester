import React from 'react';
import './Profile.css';
import homeicon from '../icons/home_icon_25x25.svg';
import profilepicture from '../images/forest_fog3.jpg';


function Profile() {

    return (
        <div>
            <div className="container__profile--picture">
                <img className="profile__picture--wrapper" src={profilepicture} width="200" height="200" alt="ProfilePicture" />

            
            <div className="container__username--headline2">
                <h2>Horst Forst</h2>
            </div>
            </div>
            
            <div className="container__profile--data">
                <div className="profile__data--item">
                <img src={homeicon} width="50" height="50" alt="Homeicon" />
                <h3 className="profile__data--headline3">Forests visited</h3>
                </div>

                <div className="profile__data--item">
                <img src={homeicon} width="50" height="50" alt="Homeicon" />
                <h3 className="profile__data--headline3">Found Treasures</h3>
                </div>

                <div className="profile__data--item">
                <img src={homeicon} width="50" height="50" alt="Homeicon" />
                <h3 className="profile__data--headline3">Data</h3>
                </div>

                <div className="profile__data--item"><img src={homeicon} width="50" height="50" alt="Homeicon" />
                <h3 className="profile__data--headline3">Data</h3>
                </div>
            </div>
        </div>
    )
}

export default Profile;