import { all, fork } from '@redux-saga/core/effects';

import citiesSaga from './cities';


export default function* rootSaga() {
    yield all([fork(citiesSaga)]);
}