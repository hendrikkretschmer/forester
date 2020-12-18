import React from 'react';
import './SignupSuccess.css';
import Header from './Header';
import welcome__image from '../images/Forester_SignupSuccess.jpg';
import Footer from './Footer';
import {Link} from 'react-router-dom';

function SignupSuccess() {

    return (

        <div className="slider__component">
            <Header />
            <div className="success__content--wrapper">
            <div className="welcome__image--wrapper">

            <h1 className="welcome__title">Welcome!</h1>
            <p className="welcome__title--subline">You successfully signed up.</p>
            <Link to="/">
                <button className="button__start" width="100">
                Start exploring!
                </button>
            </Link>
                <img src={welcome__image} className="welcome__image" alt="welcomeimage" width="100" height="100" />
                
            </div>
            
            </div>
        
            <Footer />
         </div>
    )
}

export default SignupSuccess;