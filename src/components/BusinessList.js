import React from 'react';
import Business from './Business';
import './BusinessList.css';

function BusinessList(props){

    const newArray = [];
    for(let i = 0; i < props.businesses.length; i++){
        newArray.push(<Business business={props.businesses[i]} />);
    };

    return (
        <div className='business-list'>
                {newArray}
        </div>
    )
}

export default BusinessList;