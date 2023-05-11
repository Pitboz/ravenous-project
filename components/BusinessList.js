import React from 'react';
import Business from './Business';

const testArray = Array(5);

function BusinessList(){
    testArray.map( x => <li><Business /></li>);
    return (
        <ul>
            {testArray}
        </ul>
    )
}

export default BusinessList;