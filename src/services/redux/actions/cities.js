export const fetchAutocompletedCitiesRequest = (searchedText) => ({ type: 'cities/fetchAutocompletedCitiesRequested', searchedText });

export const fetchAutocompletedCitiesSuccess = (cities) => ({ type: 'cities/fetchAutocompletedCitiesSucceeded', cities });

export const fetchAutocompletedCitiesFailure = (error) => ({ type: 'cities/fetchAutocompletedCitiesFailed', error });