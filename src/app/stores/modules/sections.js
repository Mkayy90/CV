/*
  Using Reduck - I prefer contained logic chains
*/
import * as config from '../configs/sections';

// Actions
const initialState = {
  ...config
};

// Reducers
const reducer = (state = initialState) => {
  return state;
};

// Selectors
export const getSections = (store) => store.sections;

export default reducer;