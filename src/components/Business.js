import React from 'react';
import logo from '../assets/media/pexels-faruk-tokluoğlu-16626497.jpg'
import './Business.css'

const testBusiness = {
    img: {logo},
    name: 'MarginOtto Pizzeria',
    address: 'Somewhere in New York, 23',
    city: 'New York',
    state: 'NY', 
    zipcode: '12345',
    category: 'Test Category',
    rating: '4.5 stars',
    reviewCount: '90 reviews'
};

function Business(){
    return (
        <div className='business-card'>
            <img src={logo} alt='Test'/>
            <h3 className='business-name'>{testBusiness.name}</h3>
            <div className='description'>
                <p className='address-1 address'>{testBusiness.address}</p>
                <p className='address-2 address'>{testBusiness.city}</p>
                <p className='address-3 address'>{testBusiness.state} {testBusiness.zipcode}</p>
                <p className='data data-category'>{testBusiness.category}</p>
                <p className='data data-rating'>{testBusiness.rating}</p>
                <p className='data'>{testBusiness.reviewCount}</p>
            </div>
        </div>
    )
};

export default Business;