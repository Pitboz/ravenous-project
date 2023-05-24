import React from 'react';
import Filters from './Filters';
import SearchFields from './SearchFields';
import {useState} from 'react';
import getBusinessList from '../utils/yelp-api';
import './SearchBar.css'

function SearchBar(props){

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

    async function submitRequest(){
        let data = await getBusinessList(currentSearchTerm, currentLocationTerm, currentFilter);
        props.businessList(data);

    }

    return (
        <div className='search-bar'>
            <Filters activeButton={currentFilter} 
            onSelectFilter={onSelectFilterHandler} />
            <SearchFields 
            onSearchTerm={onSearchTermHandler} 
            onLocationTerm={onLocationTermHandler} />
            <button className='submit-button' onClick={submitRequest}>Let's go!</button>
        </div>
    );
}

export default SearchBar;