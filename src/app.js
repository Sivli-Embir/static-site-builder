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
            <li><Link to="/example1">example1</Link></li>
            <li><Link to="/example2">example2</Link></li>
          </ul>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/example1" component={example1}/>
          <Route exact path="/example2" component={example2}/>
        </div>
  		</Router>
    );
  }
}

const example1 = () => <div>example1</div>
const example2 = () => <div>example2</div>

render(<App/>, document.getElementById('app'));
