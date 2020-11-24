import React from 'react';
import './ParagraphCard.css';


function ParagraphCard() {

    return (
        <div className="section__paragraph--container">
            <div className="paragraph__container--image">
            <div class="image__text">
                <h1 class="image__text--headline1">Wusstest Du schon?</h1></div>   
            </div>
            <div className="headline__container">
                <h2 className="headline__container--h2">Fischbeker Heide</h2>
            </div>
            <div className="paragraph__container">
                <p className="paragraph__container--p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quidem fugiat expedita excepturi aspernatur! 
                Iste nulla maxime sit deserunt distinctio voluptatibus 
                molestias enim dolor ut nam, quis eius laudantium temporibus eos?
                </p>
            </div>
        </div>
    )
}

export default ParagraphCard;