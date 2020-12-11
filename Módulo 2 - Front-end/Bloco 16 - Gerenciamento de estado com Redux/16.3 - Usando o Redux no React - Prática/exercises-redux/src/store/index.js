import { createStore, combineReducers } from 'redux';
import formReducer from '../reducers'

const rootReducer = combineReducers({ formReducer });

const store = createStore(rootReducer);

export default store;
