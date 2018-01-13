import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './utils/store';

store.dispatch({type: 'ADD_TODO', text: 'Read the docs'});

store.dispatch({type: 'REMOVE', text: 'Read the docs'});

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('app')
);

module.hot.accept();