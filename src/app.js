import React from 'react';
import {render} from 'react-dom';

import styles from './app.css';
import fonts from './font.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import HomePage from "./components/home-page.js";

class App extends React.Component {
  render () {
    let basename = process.env.NODE_ENV == 'production' ? 'static-site-builder/' : ''
    return (
      <Router basename={basename}>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
          <Route exact path="/" component={HomePage}/>
        </div>
  		</Router>
    );
  }
}

render(<App/>, document.getElementById('app'));
