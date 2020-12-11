import React from 'react';
import './HomeStart.css';
import Slider from './Slider';

function Home() {

    return (
        <div className=".background__image">

        <div className="slider__component">
            <Slider />
        </div>

        <div className="content__under--slider">
            <h3 className="input__title">Dein Startpunkt!</h3>
            <input type="text" placeholder="Enter your location" className="input__location"/>
        </div>
        
            {/*<div className="content__wrapper">
            
                <div className="welcome__image--wrapper">
                    
                </div>
                <div className="welcome__text">
                    
                    <h1 className="welcome__title">WELCOME TO FORESTER!</h1>
                    <p className="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quibusdam, necessitatibus rerum. Laborum necessitatibus minima
                    voluptas nostrum non? In, dolores tempora. Adipisci consequatur
                    iure ex amet reiciendis praesentium repellendus, placeat officiis.
                    </p>
                    <br></br>
                    <p className="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quibusdam, necessitatibus rerum. Laborum necessitatibus minima
                    voluptas nostrum non? In, dolores tempora. Adipisci consequatur
                    iure ex amet reiciendis praesentium repellendus, placeat officiis.
                    </p>
                </div>
            
            </div>*/}

        </div>
        
    )
}

export default Home;