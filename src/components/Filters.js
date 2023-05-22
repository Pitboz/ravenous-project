import React from 'react';
import './Filters.css'

function Filters(props){

    function clickHandler(event){
        const filter = event.target.value;
        props.onSelectFilter(filter);
    }

    return (
        <div className='filters'>
            <button className={props.activeButton === 'best_match' ? 'active-button' : 'filter-button'} 
                    type='button' 
                    value='bestMatch' 
                    onClick={clickHandler} 
                    id='best-match' >Best Match</button>
            <button className={props.activeButton === 'rating' ? 'active-button' : 'filter-button'} 
                    type='button' 
                    value='highestRating'
                    onClick={clickHandler} 
                    id='rating' >Highest Rated</button>
            <button className={props.activeButton === 'review_count' ? 'active-button' : 'filter-button'} 
                    type='button' 
                    value='mostReviewed'
                    onClick={clickHandler} 
                    id='review_count' >Most Reviewed</button>
        </div>
    )
}

export default Filters;