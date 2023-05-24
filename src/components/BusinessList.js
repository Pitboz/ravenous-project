import React from 'react';
import Business from './Business';
import './BusinessList.css';

function BusinessList(props){

    const businessArray = [];
    for(let i = 0; i < props.array.length; i++){
        businessArray.push(<Business key={props.array[i].id} business={props.array[i]} />);
    };

    return (
        <div className='business-list'>
                {businessArray}
        </div>
    )
}

export default BusinessList;