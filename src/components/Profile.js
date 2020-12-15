import React from 'react';
import './Profile.css';
//import homeicon from '../icons/home_icon_25x25.svg';
import profilepicture from '../images/forest_fog3.jpg';
import Header from './Header';
import Footer from './Footer';


function Profile() {

    return (
        <div title="HEADER and FOOTER WRAPPER">
            <Header />
        <div>
            <div className="container__profile--picture">
                <img className="profile__picture--wrapper" src={profilepicture} width="200" height="200" alt="ProfilePicture" />

            
            <div className="container__username--headline2">
                <h2>Horst Forst</h2>
            </div>
            </div>
            
            <div className="container__profile--data">
                <div className="profile__data--item">
               
                <h3 className="profile__data--headline3">Forests visited</h3>
                </div>

                <div className="profile__data--item">
              
                <h3 className="profile__data--headline3">Found Treasures</h3>
                </div>

                <div className="profile__data--item">
               
                <h3 className="profile__data--headline3">Data</h3>
                </div>

                <div className="profile__data--item">
                <h3 className="profile__data--headline3">Data</h3>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default Profile;