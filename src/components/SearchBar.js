import React from 'react';
import './SearchBar.css';
import explore_icon_25x25 from '../icons/explore_icon_25x25.svg';

function SearchBar() {

    return (
        <div className ="searchbar__section--wrapper">
            <div className="searchbar__section--topline"></div>
            <div className="searchbar__top--wrapper">

            </div>
            <div className="searchbar__section--top"></div>


            <div className="input__component--wrapper">
                <div className="input__wrapper">
                <div className="input__label--wrapper">
                <img src={explore_icon_25x25} className="input__icon" alt="input__icon" />
                
                <label className="label__title">Set location</label>
                </div>

                <input type="text" placeholder="type in your current position" className="input__field">
                
                </input>
                </div>
                

            </div>
            
        </div>
    )
}

export default SearchBar;