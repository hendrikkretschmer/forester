import React from 'react';
import './HomeStart.css';
import Header from './Header';
import Footer from './Footer';
import Slider from './Slider';
import SearchBar from './SearchBar';

function Home() {

    return (

        <div className="slider__component">
            <Header />
            <Slider />
            <div className="searchbar__wrapper">
                <SearchBar />
            </div>
        
            <Footer />
         </div>
    )
}

export default Home;