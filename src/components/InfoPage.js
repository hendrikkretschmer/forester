import React, {useState, useEffect} from 'react';
import './Infopage.css';
import arrow_left from '../images/arrow_icon_left_black.svg';
import arrow_right from '../images/arrow_icon_right_black.svg';
import treeicon2 from '../icons/treasureicons/treeicon2.svg';
import forestData from './ForestData';


function Infopage() {
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
      
      <div className="content__card--wrapper">
        
          <div className="allbuttons__container">
            
                  <button onClick={slideLeft} className="buttonbox__left">
                    <img src={arrow_left} alt="arrow_left" className="button__icon--left"/>
                  </button>

                  <button onClick={slideRight} className="buttonbox__right">
                    <img src={arrow_right} alt="arrow_right" className="button__icon--right"/>
                  </button>
          
          </div>

          {/* ///////////////////////////////////////////// */}

          { forest[index] && (
            <div className="forest__container">
              <img className="main__image" src={forest[index].img} alt="image_1"/>
              
              <div className="title__wrapper">
                <h3 className="forest__title">{forest[index].name}</h3>
              </div>
              
              <div className="subline__wrapper">
                
                <div className="lupenicon__wrapper">
                <button className="button__lupenicon" width="20" height="20">
                  <img src={treeicon2} alt="lupenicon" width="30" height="35"/>
                </button>
                </div>

                <div className="lupenicon__wrapper">
                <button className="button__lupenicon" width="20" height="20">
                  <img src={treeicon2} alt="lupenicon" width="30" height="35"/>
                </button>
                </div>

                <div className="lupenicon__wrapper">
                <button className="button__lupenicon" width="20" height="20">
                  <img src={treeicon2} alt="lupenicon" width="30" height="35"/>
                </button>
                </div>

                <div className="lupenicon__wrapper">
                <button className="button__lupenicon" width="20" height="20">
                  <img src={treeicon2} alt="lupenicon" width="30" height="35"/>
                </button>
                </div>

                <div className="lupenicon__wrapper">
                <button className="button__lupenicon" width="20" height="20">
                  <img src={treeicon2} alt="lupenicon" width="30" height="35"/>
                </button>
                </div>
                
                {/*<p className="forest__text">{forest[index].text}</p>*/}
              
              </div>

              <div className="paragraph__wrapper">
                <p>{forest[index].textlong}</p>
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

export default Infopage;