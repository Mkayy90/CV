import { createStore, combineReducers } from 'redux';
import examples from './modules/examples';
import sections from './modules/sections';
import skills from './modules/skills';
import about from './modules/about';

const reducer = combineReducers({
  examples,
  sections,
  skills,
  about
});

const store = (initialState) => createStore(reducer, initialState);

export default store;