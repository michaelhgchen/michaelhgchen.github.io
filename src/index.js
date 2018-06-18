import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';
import data from './data.json';

ReactDOM.render(
  <App {...data} />,
  document.getElementById('app')
);
