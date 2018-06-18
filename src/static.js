import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Mustache from 'mustache';

import App from './app/App';
import data from './data.json';
import template from './index.html';

export default Mustache.render(
  template, {
    ssr: ReactDOMServer.renderToStaticMarkup(<App {...data} />)
  }
);
