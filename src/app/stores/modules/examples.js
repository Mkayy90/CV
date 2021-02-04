/*
  Using Reduck - I prefer contained logic chains
*/
import { starCode } from '../configs/exampleCode';

// Actions
const SHOW = 'app/examples/show';
const HIDE = 'app/examples/hide';

export const show = (value) => ({ type: SHOW, value });
export const hide = () => ({ type: HIDE });

const initialState = {
  activeExample: '',
  config: {
    star: {
      name: 'Single SVG star',
      type: 'React',
      code: starCode
    }
  }
};

// Reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW:
      return Object.assign({}, state, { activeExample: action.value });
    case HIDE:
      return Object.assign({}, state, { activeExample: '' });
    default:
      return state
  }
};

// Selectors
export const getExampleData = (store) => store.examples;

export default reducer;