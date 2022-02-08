import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import countriesReducer from './countries.reducer';
const store = new createStore(countriesReducer,applyMiddleware(thunk));
export default store;