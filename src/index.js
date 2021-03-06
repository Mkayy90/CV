import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storeConfig from './app/stores/storeConfig';
import App from './app/App';
import './normalize.css';
import './index.css';

const store = storeConfig();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);