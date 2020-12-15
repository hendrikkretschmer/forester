import React, {useState, useEffect} from 'react';
import './Slider.css';
import arrow_left from '../images/arrow_icon_left_black.svg';
import arrow_right from '../images/arrow_icon_right_black.svg';
import forestData from './ForestData';
import Header from './Header';
import Footer from './Footer';


function Slider() {
  const [index, setIndex] = useState(0);
  const [forest, setForest] = useState([]);

  const slideRight = () => {
    setIndex((index + 1) % forest.length);
  }

  const slideLeft = () => {
    if (index - 1 < 0) {
      setIndex(0)
    } else {
      setIndex(index - 1);
    }
  }

  useEffect(() => {
    setForest(forestData);
  }, []); // dependency array: empty array -> run once

  function clickMe(category) {
    setForest(forestData.filter((forest) => forest.forest === category));
  }


console.log(index)
  return (
   
     
      
    <div className="App">
      
      <div className="slider__card--wrapper">
        
          <div className="slider__allbuttons--container">
            
                  <button onClick={slideLeft} className="slider__buttonbox--left">
                    <img src={arrow_left} alt="arrow_left" className="slider__button--left" width="10" height="10"/>
                  </button>

                  <button onClick={slideRight} className="slider__buttonbox--right">
                    <img src={arrow_right} alt="arrow_right" className="slider__button--right" width="10" height="10"/>
                  </button>
          
          </div>

          {/* ///////////////////////////////////////////// */}

          { forest[index] && (
            <div className="slider__container">
              <img className="slider__main--image" src={forest[index].img} alt="image_1"/>
              
              <div className="slider__title--wrapper">
                <h3 className="slider__title">{forest[index].name}</h3>
              
                <p className="slider__text">{forest[index].text}</p>
              </div>
              {/*<h2>Index: {index}</h2>*/}
            </div>
          )}



          {/*
          <div className="forest__card--output">
          {forest.map((forest) => (
          
                  <div className="image">
                      <img src={image_1} width="500" height="500" alt="image_1" />
                  </div>
                  
                  <h1 key={treasure.id}>{forest.name}</h1>

                  <div className="text">
                  <p key={treasure.id}>{treasure.text}</p>
                  </div>
                      
                  )

        </div>
          */}
      
    
    
      </div>
    </div>
    
   
  );
}

export default Slider;