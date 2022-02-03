import { call, put, takeLatest } from '@redux-saga/core/effects';

import { fetchAutocompletedCities } from '../../../api/spott';
import { fetchAutocompletedCitiesFailure, fetchAutocompletedCitiesSuccess } from '../actions/cities';


function* fetchAutocompletedCitiesSaga({ searchedText }) {
    try {
        const cities = yield call(fetchAutocompletedCities, searchedText);

        yield put(fetchAutocompletedCitiesSuccess(cities));
    }
    catch {
        const newError = new Error('Request failed. Please refresh the page.');

        yield put(fetchAutocompletedCitiesFailure(newError));
    }
}


export default function* citiesSaga() {
    yield takeLatest('cities/fetchAutocompletedCitiesRequested', fetchAutocompletedCitiesSaga);
}

