import React from 'react';
import Business from './Business';
import './BusinessList.css';

const testArray = Array.apply(null, Array(6)).map(function () {})

function BusinessList(){
    const newArray = testArray.map( () => <Business />);
    console.log(testArray);
    return (
        <div className='business-list'>
                {newArray}
        </div>
    )
}

export default BusinessList;