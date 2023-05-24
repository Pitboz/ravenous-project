const api_key = 'Dwn9ZwAeKS_yYDZaEXjFMTmR2SVuzTev-y5xubfxjW5OaIrJA6A3rXagB3JCJ-SUiPlFxOh1WnqaLXTjkVz_slgZS0gvHaAodceZSQU8Q04iA63-ps7cgvcXc-hrZHYx';

async function getBusinessList(term, location, filter){

    let url = "https://api.yelp.com/v3/businesses/search";
    let queryStrings = [];
    let joinedQueries = "";
    const corsSupport = 'https://cors-anywhere.herokuapp.com/';
    const options = {
        method: 'GET', 
        headers: {
            accept: 'application/json',
            Authorization: "Bearer " + api_key
        }
    };

    if (term) {
        queryStrings.push("term=" + term);
    }

    if (location) {
        queryStrings.push("location=" + location);
    }

    if (filter) {
        queryStrings.push("sort_by=" + filter);
    }

    joinedQueries = queryStrings.join("&");

    url = corsSupport + url + "?" + joinedQueries;

    const response = await fetch(url, options);

    if(response.status === 200){
        const jsonBody = await response.json();
        return jsonBody.businesses;
    }

}

export default getBusinessList;