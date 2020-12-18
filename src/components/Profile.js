import React from 'react';
import './Profile.css';
//import homeicon from '../icons/home_icon_25x25.svg';
import profilepicture from '../images/forest_fog3.jpg';
import Header from './Header';
import Footer from './Footer';
import bookmark from '../icons/treasureicons/bookmark_darkgreen1.svg';
import treeicon from '../icons/treasureicons/treeicon1.svg';
import pilzicon1 from '../icons/treasureicons/pilzicon2.svg';

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
                
                <div className="profile__data--items">
                
                <div className="profile__data--icon">
                <img src={treeicon} width="25" height="25" className="bookmark__profile" alt="bookmark__profile" />
                </div>
                <h3 className="profile__data--headline3">Activities</h3>
                </div>

                <ul className="activities__list">
                    <li>Forests visited: 13</li>
                    <li>Treasures found: 6</li>
                    <ul className="activities__list--treasures">
                        <li>Fliegenpilz</li>
                        <li>Waldegerling</li>
                        <li>Birkenröhrling</li>
                        <li>Bucheckern</li>
                        <li>Sauerklee</li>
                    </ul>
                </ul>


                <div className="profile__data--items">
                
                <div className="profile__data--icon">
                <img src={bookmark} width="20" height="20" className="bookmark__profile" alt="bookmark__profile" />
                </div>
                <h3 className="profile__data--headline3">Bookmarks</h3>
                
                </div>

                <div className="allbookmarks__wrapper">
                
                <div className="bookmark__list--items">
                    <div className="bookmark__listitem--forest">
                        <h3 className="bookmark__title">Steinpilz</h3>
                        <div className="bookmark__listitem--image">
                        <img src={profilepicture} width="70" height="70" alt="listitem__image" />
                        
                        <div className="pilzicon__wrapper">
                        <img className="pilzicon__size" src={pilzicon1} width="15" height="15" alt="pilzicon" />
                        </div>

                        </div>
                    </div>
                </div>

                <div className="bookmark__list--items">
                    <div className="bookmark__listitem--forest">
                        <h3 className="bookmark__title">Steinpilz</h3>
                        <div className="bookmark__listitem--image">
                        <img src={profilepicture} width="70" height="70" alt="listitem__image" />
                        
                        <div className="pilzicon__wrapper">
                        <img className="pilzicon__size" src={pilzicon1} width="15" height="15" alt="pilzicon" />
                        </div>

                        </div>
                    </div>
                </div>

                <div className="bookmark__list--items">
                    <div className="bookmark__listitem--forest">
                        <h3 className="bookmark__title">Steinpilz</h3>
                        <div className="bookmark__listitem--image">
                        <img src={profilepicture} width="70" height="70" alt="listitem__image" />
                        
                        <div className="pilzicon__wrapper">
                        <img className="pilzicon__size" src={pilzicon1} width="15" height="15" alt="pilzicon" />
                        </div>

                        </div>
                    </div>
                </div>

                <div className="bookmark__list--items">
                    <div className="bookmark__listitem--forest">
                        <h3 className="bookmark__title">Steinpilz</h3>
                        <div className="bookmark__listitem--image">
                        <img src={profilepicture} width="70" height="70" alt="listitem__image" />
                        
                        <div className="pilzicon__wrapper">
                        <img className="pilzicon__size" src={pilzicon1} width="15" height="15" alt="pilzicon" />
                        </div>

                        </div>
                    </div>
                </div>

                




                </div>


                </div>

                
            </div>
            <Footer />
        </div>
        
    )
}

export default Profile;