import React from 'react';

const testBusiness = {
    img: 'assets/media/pexels-faruk-tokluoğlu-16626497.jpg',
    name: 'Test Business',
    address: 'Test Address',
    city: 'Test City',
    state: 'Test State', 
    zipcode: '12345',
    category: 'Test Category',
    rating: 'Test Rating',
    reviewCount: 'Test Review Count'
};

function Business(){
    return (
        <div>
            <img src="" alt="" />
            <p>{testBusiness.name}</p>
            <p>{testBusiness.address}</p>
            <p>{testBusiness.city}</p>
            <p>{testBusiness.state}</p>
            <p>{testBusiness.zipcode}</p>
            <p>{testBusiness.category}</p>
            <p>{testBusiness.rating}</p>
            <p>{testBusiness.reviewCount}</p>
        </div>
    )
};

export default Business;