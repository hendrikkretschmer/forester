import React, {useState, useEffect} from 'react';
import './Forestpage.css';
import arrow_left from '../images/arrow_icon_left_black.svg';
import arrow_right from '../images/arrow_icon_right_black.svg';
import bookmark_darkgreen1 from '../icons/treasureicons/bookmark_darkgreen1.svg';
import forestData from './ForestData';
import exploreicon from '../icons/explore_icon_25x25.svg';
import treasureicon from '../icons/treasure_icon_25x25.svg';
import quotation from '../icons/quotation-icons/quotation4.svg';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import pilzicon1 from '../icons/treasureicons/pilzicon1.svg';
import animalicon1 from '../icons/treasureicons/animalicon1.svg';
import herbsicon1 from '../icons/treasureicons/herbsicon1.svg';
import snackicon1 from '../icons/treasureicons/snackicon1.svg';
import treeicon1 from '../icons/treasureicons/treeicon1.svg';

function Forestpage() {
  const [index, setIndex] = useState(0);
  const [forest, setForest] = useState([]);
  // http://localhost:3000/forestpage/:forestId (mischwald/1, 2, 3 …)
  const {forestId } = useParams();

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
    const currentForestIndex = forest.findIndex(
      f => f.id === parseInt(forestId)
    );
    if (currentForestIndex >= 0) {
      setIndex(currentForestIndex);
    }
  }, [forest, forestId]);

  useEffect(() => {
    setForest(forestData);
  }, []); // dependency array: empty array -> run once

  function clickMe(forest) {
    setForest(forestData.filter((forest) => forest.forest === forest));
  }


  return (
    <div title="HEADER and FOOTER WRAPPER">
    <Header />
    <div className="main__wrapper">
      
      <div className="treasure__card--wrapper">
        
          <div className="treasure__allbuttons--container">
            
                  <button onClick={slideLeft} className="treasure__buttonbox--left">
                    <img src={arrow_left} alt="arrow_left" className="treasure__button--left" width="10" height="10"/>
                  </button>

                  <button onClick={slideRight} className="treasure__buttonbox--right">
                    <img src={arrow_right} alt="arrow_right" className="treasure__button--right" width="10" height="10"/>
                  </button>
          
          </div>

          {/* ///////////////////////////////////////////// */}

          { forest[index] && (
            <div className="treasure__container--image">
              <img className="treasure__main--image" src={forest[index].img} alt="image_1"/>
              
              <div className="treasure__title--wrapper">
                <h3 className="treasure__title">{forest[index].name}</h3>
              </div>

            <div className="treasure__subline--wrapper">
            
                
                {/*<div className="icon__wrapper">
                <button className="button__icon" width="20" height="20">
                  <img src={treeicon2} alt="icon" width="30" height="35"/>
                </button>
                </div>

                <div className="icon__wrapper">
                <button className="button__icon" width="20" height="20">
                  <img src={exploreicon} alt="icon" width="30" height="35"/>
                </button>
          </div>*/}

                <div className="bookmark__icon--wrapper">
                <Link to="/profile"><button className="bookmark__icon" width="5" height="5">
                  <img src={bookmark_darkgreen1} alt="icon" width="20" height="20"/>
                </button></Link>
                </div>
                
                
                <div className="bookmark__icon--wrapper">
                <Link to="/treasures"><button className="bookmark__icon" width="5" height="5">
                  <img src={treasureicon} alt="icon" width="30" height="30"/>
                </button></Link>
                </div>
                
                {/*<p className="forest__text">{forest[index].text}</p>*/}
              
              </div>
             

  

              <div className="paragraph__wrapper">
                
                <div className="zitat">
                  <div className="paragraph__icon--wrapper">
                  <img src={quotation} className="quotation" alt="quotation"/>
                  </div>

                  <h5 className="paragraph__info--headline5">{forest[index].text}</h5>
                  </div>

                <h5 className="paragraph__info--merkmale">Informationen</h5>
                
                <div className="paragraph__textlong--wrapper">
                <p className="paragraph__textlong">{forest[index].textlong}</p>
                </div>
                
                <div className="paragraph__treasure--links">
                
                
              <div className="paragraph__icon--wrapper">
              <Link to="/treasures"><img src={pilzicon1} className="quotation" alt="treasureicon"/></Link>
                  </div>
                  
                  <div className="paragraph__icon--wrapper">
                  <Link to="/treasures"><img src={animalicon1} className="quotation" alt="treasureicon"/></Link>
                  </div>
                  <div className="paragraph__icon--wrapper">
                  <Link to="/treasures"><img src={herbsicon1} className="quotation" alt="treasureicon"/></Link>
                  </div>
                  <div className="paragraph__icon--wrapper">
                  <Link to="/treasures"><img src={snackicon1} className="quotation" alt="treasureicon"/></Link>
                  </div>
                  <div className="paragraph__icon--wrapper">
                  <Link to="/treasures"><img src={treeicon1} className="quotation" alt="treasureicon"/></Link>
                  </div>
                </div>
              
              </div>
              {/*<h2>Index: {index}</h2> <hr className="trennlinie"></hr>*/ }


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
    <Footer />
    </div>
   
  );
}

export default Forestpage;