import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

// STATE
import ShowsState from './context/shows/ShowsState';

ReactDOM.render(
  <ShowsState>
    <App />
  </ShowsState>,
  document.getElementById('root')
);
