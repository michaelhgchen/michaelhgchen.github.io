import React, { Component } from 'react';

import 'normalize.css';
import './global.scss';
import './App.scss'

class App extends Component {
  render() {
    const {
      about,
      image,
      links,
      name,
      title,
      welcome,
    } = this.props;

    return (
      <main>
        <section className="page-half page-half--primary">
          <div className="hero">
            <div className="hero__image">
              <img src={image} alt={name}/>
            </div>
            <div className="hero__description">
              {welcome && <h4>{welcome}</h4>}
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
        </section>
        <section className="page-half page-half--secondary">
          <i>{about}</i>
        </section>
      </main>
    )
  }
}

export default App;
