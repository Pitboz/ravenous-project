import React from 'react';
import './SearchFields.css';
import Autocomplete from "react-google-autocomplete";

function SearchFields(props){

    function onInputSearch(event){
        const newTerm = event.target.value;
        props.onSearchTerm(newTerm);
    }

    function onInputLocation(event){
        const newLocation = event.target.value;
        props.onLocationTerm(newLocation);
    }

    function keyPressHandler(event){
        if(event.key === "Enter"){
            props.onKeyPress(props.currentKey ? false : true);
        }
    }

    /**/

    return (
        <div className='search-fields'>
             <input className='input-button' 
                    type='text'
                    placeholder='Search Businesses' 
                    onInput={onInputSearch} 
                    onKeyDown={keyPressHandler} ></input>
             <input className='input-button' 
                    type="text" 
                    placeholder='Where?' 
                    min={1} 
                    max={250}
                    onInput={onInputLocation} 
                    onKeyDown={keyPressHandler} ></input>
        </div>
    )
}

export default SearchFields;