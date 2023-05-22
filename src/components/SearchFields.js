import React from 'react';
import './SearchFields.css'

function SearchFields(props){

    function onInputSearch(event){
        const newTerm = event.target.value;
        props.onSearchTerm(newTerm);
    }

    function onInputLocation(event){
        const newLocation = event.target.value;
        props.onLocationTerm(newLocation);
    }



    return (
        <div className='search-fields'>
             <input className='input-button' 
                    type='text'
                    placeholder='Search Businesses' 
                    onInput={onInputSearch} ></input>
            <input className='input-button' 
                    type="text" 
                    placeholder='Where?' 
                    min={1} 
                    max={250}
                    onInput={onInputLocation} ></input>
        </div>
    )
}

export default SearchFields;