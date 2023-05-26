import React, { useEffect, useState } from 'react';
import Filters from './Filters';
import SearchFields from './SearchFields';
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
    const [currentKeyPress, setKeyPress] = useState(false);

    function onSelectFilterHandler(newFilter){
        setFilter(filterTerms[newFilter]);
    };

    function onSearchTermHandler(newSearchTerm){
        setSearchTerm(newSearchTerm);
    }

    function onLocationTermHandler(newLocationTerm){
        setLocationTerm(newLocationTerm);
    }

    function onKeyPressHandler(newKeyPress){
        setKeyPress(newKeyPress);
    }   
    
    async function submitRequest(){
        if (!currentLocationTerm) {
            return;
        }
        let fetchedBusinesses = await getBusinessList(currentSearchTerm, currentLocationTerm, currentFilter);
        props.businessList(fetchedBusinesses);
    }

    useEffect(() => {
        submitRequest();
    }, [currentFilter, currentKeyPress]);

    return (
        <div className='search-bar'>
            <Filters activeButton={currentFilter} 
            onSelectFilter={onSelectFilterHandler} />
            <SearchFields 
            onSearchTerm={onSearchTermHandler} 
            onLocationTerm={onLocationTermHandler} 
            onKeyPress={onKeyPressHandler} 
            currentKey={currentKeyPress}/>
            <button className='submit-button' onClick={submitRequest}>Let's go!</button>
        </div>
    );
}

export default SearchBar;