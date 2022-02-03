const initialState = { data: {}, isLoading: false };


const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'cities/fetchAutocompletedCitiesRequested':
            return { ...state, isLoading: true };
        case 'cities/fetchAutocompletedCitiesSucceeded':
            return { data: action.cities, isLoading: false }
        case 'cities/fetchAutocompletedCitiesFailed':
            return { ...state, error: action.error, isLoading: false };
        default: return state;
    }
}


export default citiesReducer;