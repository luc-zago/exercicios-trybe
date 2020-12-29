import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import formReducer from '../reducers';

const rootReducer = combineReducers({ formReducer });

const store = createStore(rootReducer, composeWithDevTools());

export default store;
