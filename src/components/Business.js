import React from 'react';
import './Business.css'

function Business(props){

    const fullAddress = props.business.location.address1 + " " + props.business.location.state + " " + props.business.location.zip_code;
    const addressUrl = fullAddress.replaceAll(" ", "+");
    const googleMapsUrl = 'https://www.google.com/maps/place/' + addressUrl;
    console.log(props.business)

    return (
        <div className='business-card'>
            <a href={props.business.url} target='_blank'><img src={props.business.image_url} alt='Test'/></a>
            <h3 className='business-name'>{props.business.name}</h3>
            <div className='description'>
                <a className='address-1 address' href={googleMapsUrl} target='_blank' >{props.business.location.address1}</a>
                <p className='address-2 address'>{props.business.location.city}</p>
                <p className='address-3 address'>{props.business.location.state} {props.business.location.zip_code}</p>
                <p className='data data-category'>{props.business.categories[0].title}</p>
                <p className='data data-rating'>{props.business.rating} stars</p>
                <p className='data'>{props.business.review_count}</p>
            </div>
        </div>
    )
};

export default Business;