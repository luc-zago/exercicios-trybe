import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import registerReducer from '../Reducers/registerReducer';
//import loginReducer from '../Reducers/loginReducer';
import reducers from '../Reducers';

// const rootReducer = combineReducers({ registerReducer, loginReducer });

const store = createStore(reducers, composeWithDevTools());

export default store;
