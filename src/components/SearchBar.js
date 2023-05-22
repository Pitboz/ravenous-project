import React from 'react';
import Filters from './Filters';
import SearchFields from './SearchFields';
import {useState} from 'react';
import './SearchBar.css'

function SearchBar(){

    const filterTerms = {
        bestMatch: "best_match",
        highestRating: "rating",
        mostReviewed: "review_count"
    };

    const [currentSearchTerm, setSearchTerm] = useState("");

    const [currentLocationTerm, setLocationTerm] = useState("");

    const [currentFilter, setFilter] = useState(filterTerms.bestMatch);

    function onSelectFilterHandler(newFilter){        
        setFilter(filterTerms[newFilter]);
    };

    function onSearchTermHandler(newSearchTerm){
        setSearchTerm(newSearchTerm);
    }

    function onLocationTermHandler(newLocationTerm){
        setLocationTerm(newLocationTerm);
    }

    function buttonLogger(){
        console.log('Searching Yelp with ' + currentSearchTerm + ', ' + currentLocationTerm + ', ' + currentFilter);
    }

    return (
        <div className='search-bar'>
            <Filters activeButton={currentFilter} 
            onSelectFilter={onSelectFilterHandler} />
            <SearchFields 
            onSearchTerm={onSearchTermHandler} 
            onLocationTerm={onLocationTermHandler} />
            <button className='submit-button' onClick={buttonLogger}>Let's go!</button>
        </div>
    );
}

export default SearchBar;