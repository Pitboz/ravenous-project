import React from 'react';
import './Business.css'

function Business(props){
    return (
        <div className='business-card'>
            <img src={props.business.img} alt='Test'/>
            <h3 className='business-name'>{props.business.name}</h3>
            <div className='description'>
                <p className='address-1 address'>{props.business.address}</p>
                <p className='address-2 address'>{props.business.city}</p>
                <p className='address-3 address'>{props.business.state} {props.business.zipcode}</p>
                <p className='data data-category'>{props.business.category}</p>
                <p className='data data-rating'>{props.business.rating}</p>
                <p className='data'>{props.business.reviewCount}</p>
            </div>
        </div>
    )
};

export default Business;