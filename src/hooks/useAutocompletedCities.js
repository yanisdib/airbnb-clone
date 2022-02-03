import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAutocompletedCitiesRequest } from '../services/redux/actions/cities';


export default (searchedText) => {
    const dispatch = useDispatch();

    useEffect(() => {
        searchedText.length > 0 &&
            dispatch(fetchAutocompletedCitiesRequest(searchedText));
    }, [searchedText]);

    const autocompletedCities = useSelector(state => state.cities);

    const { data, isLoading, error } = autocompletedCities;

    return [data, isLoading, error];
}