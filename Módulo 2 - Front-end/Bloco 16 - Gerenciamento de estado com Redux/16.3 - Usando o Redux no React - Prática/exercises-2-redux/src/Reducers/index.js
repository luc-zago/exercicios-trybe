import { combineReducers } from 'redux';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';

const reducers = {
  registerReducer,
  loginReducer
};

export default combineReducers(reducers);
