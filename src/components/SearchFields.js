import React from 'react';
import './SearchFields.css'

function SearchFields(){
    return (
        <div className='search-fields'>
             <input className='input-button' type='text' placeholder='Search Businesses'></input>
            <input className='input-button' type="text" placeholder='Where?' min={1} max={250}></input>
        </div>
    )
}

export default SearchFields;