import React from 'react';
import './HomeStart.css';
import Header from './Header';
import Footer from './Footer';
import Slider from './Slider';

function Home() {

    return (

        <div className="slider__component">
            <Header />
            
            <Slider />
            
            <Footer />
         </div>
    )
}

export default Home;