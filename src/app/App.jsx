import React, { Component } from 'react';

import 'normalize.css';
import './global.scss';
import './App.scss'

class App extends Component {
  render() {
    const {
      name,
      title,
      welcome,
      links
    } = this.props;

    return (
      <main className="above-the-fold">
        <div className="hero">
          <div>
            <h4>{welcome}</h4>
            <h1>{name}</h1>
            <h4>{title}</h4>
            <div className="link-container">
              {
                links.map(({ type, url }) =>
                  <a key={type} href={url}>
                    <i className={`link-container__icon icon icon-${type}`}/>
                  </a>
                )
              }
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default App;
