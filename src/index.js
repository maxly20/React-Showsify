import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

// STATE
import ShowsState from './context/shows/ShowsState';
import AlertsState from './context/alerts/AlertsState';

ReactDOM.render(
  <ShowsState>
    <AlertsState>
      <App />
    </AlertsState>
  </ShowsState>,
  document.getElementById('root')
);
