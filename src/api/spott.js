import axios from 'axios';


const headers = {
    'x-rapidapi-host': process.env.REACT_APP_SPOTT_RAPIDAPI_HOST,
    'x-rapidapi-key': process.env.REACT_APP_SPOTT_RAPIDAPI_KEY
};

const configureOptions = (method, url, params) => ({ method, url, params, headers });


export const fetchAutocompletedCities = async (searchedText) => {
    const url = 'https://spott.p.rapidapi.com/places/autocomplete';
    const params = {
        limit: 10,
        skip: 0,
        q: searchedText,
        type: 'CITY'
    };

    const options = configureOptions('GET', url, params);

    try {
        const response = await axios.request(options);

        return response.data;
    }
    catch (error) {
        console.log(error)
    }
}