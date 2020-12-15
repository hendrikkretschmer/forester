import React from 'react';
import './Explore.css';
import Map from './Map';
import forestData from './ForestData';
import Header from './Header';
import Footer from './Footer';

function Explore() {

    return (
        <div title="HEADER and FOOTER WRAPPER">
        <Header />
        <div>
            <Map forests={forestData}/>
        </div>
        <Footer />
        </div>
    )
}

export default Explore;