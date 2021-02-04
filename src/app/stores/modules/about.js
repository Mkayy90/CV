/*
  Using Reduck - I prefer contained logic chains
*/
import * as config from '../configs/about';

// Actions
const initialState = {
  ...config
};

// Reducers
const reducer = (state = initialState) => {
  return state;
};

// Selectors
export const getAbout = (store) => store.about;

export default reducer;