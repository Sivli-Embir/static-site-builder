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
  constructor() {
    super()
    // runce once on app launch
    this.basename = window.location.pathname
  }
  render () {
    return (
      <Router basename={this.basename}>
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
