import createSagaMiddleware from '@redux-saga/core';
import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore
} from 'redux';

import { citiesReducer } from '../reducers';
import sagas from '../sagas/root';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const reducers = combineReducers({ cities: citiesReducer });


const configureStore = () => {
    const store = createStore(reducers, enhancer);

    sagaMiddleware.run(sagas);

    return store;
}


export default configureStore;