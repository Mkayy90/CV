import { createStore, combineReducers } from 'redux';
import examples from './modules/examples';

const reducer = combineReducers({
  examples
});

const store = (initialState) => createStore(reducer, initialState);

export default store;