/*
  Using Reduck - I prefer contained logic chains
*/

// Actions
const SHOW = 'app/examples/show';
const HIDE = 'app/examples/hide';

export const show = (value) => ({ type: SHOW, value });
export const hide = () => ({ type: HIDE });

const initialState = {
  example: ''
};

// Reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW:
      return Object.assign({}, state, { example: action.value });
    case HIDE:
      return Object.assign({}, state, { example: '' });
    default:
      return state
  }
};

// Selectors
export const getExample = (store) => store.examples;

export default reducer;