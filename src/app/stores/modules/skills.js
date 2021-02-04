/*
  Using Reduck - I prefer contained logic chains
*/
import { skills } from '../configs/skills';

// Actions
const initialState = {
  skills
};

// Reducers
const reducer = (state = initialState) => {
  return state;
};

// Selectors
export const getSkills = (store) => store.skills;

export default reducer;