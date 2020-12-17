import React, {useState, useEffect} from 'react';
import './Forestpage.css';
import arrow_left from '../images/arrow_icon_left_black.svg';
import arrow_right from '../images/arrow_icon_right_black.svg';
import treeicon2 from '../icons/treasureicons/treeicon2.svg';
import bookmark_darkgreen1 from '../icons/treasureicons/bookmark_darkgreen1.svg';
import forestData from './ForestData';
import exploreicon from '../icons/explore_icon_25x25.svg';
import quotation from '../icons/quotation-icons/quotation4.svg';
import { useParams } from 'react-router-dom';



function Forestpage() {
  const [index, setIndex] = useState(0);
  const [forest, setForest] = useState([]);
  // http://localhost:3000/forestpage/:forestCategory/:forestId (mischwald/1, 2, 3 …)
  const { forestCategory, forestId } = useParams();

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
      t => t.forest.toLowerCase() === forestCategory.toLowerCase()
      && t.id === parseInt(forestId)
    );
    if (currentForestIndex >= 0) {
      setIndex(currentForestIndex);
    }
  }, [forest, forestId]);

  useEffect(() => {
    setForest(forestData);
  }, []); // dependency array: empty array -> run once

  function clickMe(category) {
    setForest(forestData.filter((forest) => forest.forest === category));
  }


  return (
    <div title="HEADER and FOOTER WRAPPER">
    
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
                <button className="bookmark__icon" width="5" height="5">
                  <img src={bookmark_darkgreen1} alt="icon" width="20" height="20"/>
                </button>
                </div>
                
                <div className="bookmark__icon--wrapper">
                <button className="bookmark__icon" width="5" height="5">
                  <img src={exploreicon} alt="icon" width="30" height="30"/>
                </button>
                </div>
                
                {/*<p className="forest__text">{forest[index].text}</p>*/}
              
              </div>
             

  

              <div className="paragraph__wrapper">
                
                <div className="zitat">
                  <div className="paragraph__icon--wrapper">
                  <img src={quotation} className="quotation" alt="quotation"/>
                  </div>

                  <h5 className="paragraph__info--headline5">{forest[index].info}</h5>
                  </div>

                <h5 className="paragraph__info--merkmale">Merkmale</h5>
                
                <ul className="paragraph__listitems">
                <li className="paragraph__listitem--hut"><strong>Hut:&nbsp;</strong> {forest[index].Hut}</li>
                <li className="paragraph__listitem--hutfarbe"><strong>Hutfarbe:&nbsp;</strong> {forest[index].Hutfarbe}</li>
                <li className="paragraph__listitem--stiel"><strong>Stiel:&nbsp;</strong>{forest[index].Stiel}</li>
                <li className="paragraph__listitem--wuchshöhe"><strong>Wuchshöhe:&nbsp;</strong>{forest[index].Wuchshöhe}</li>
                <li className="paragraph__listitem--fleisch"><strong>Fleisch:&nbsp;</strong>{forest[index].Fleisch}</li>
                <li className="paragraph__listitem--fruchtkörper"><strong>Fruchtkörper:&nbsp;</strong>{forest[index].Fruchtkörper}</li>
                <li className="paragraph__listitem--besonderheit"><strong>Besonderheit:&nbsp;</strong>{forest[index].Besonderheit}</li>
                <li className="paragraph__listitem--verweckslungsgefahr"><strong>Verwechslung:&nbsp;</strong>{forest[index].Verwechslungsgefahr}</li>
              </ul>
              
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
    
    </div>
   
  );
}

export default Forestpage;