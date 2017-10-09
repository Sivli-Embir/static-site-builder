import React from 'react';
import {render} from 'react-dom';

import './app.css';
import './font.css';

import {BrowserRouter as Router} from 'react-router-dom'
import Navigation from "./components/navigation.js";



class App extends React.Component {
  constructor() {
    super()
    // run once on app launch
    this.basename = window.location.pathname
  }
  render () {
    return (
      <Router basename={this.basename}>
        <Navigation />
  		</Router>
    );
  }
}

render(<App/>, document.getElementById('app'));
