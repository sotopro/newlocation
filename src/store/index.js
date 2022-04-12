import {  createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import placesReducer from './reducer/places.reducer';

const middlewares = [thunk, logger];

const rootReducer = combineReducers({
    places: placesReducer
});

export default createStore(rootReducer,  composeWithDevTools(applyMiddleware(...middlewares)));