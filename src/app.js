import React from 'react';
import {render} from 'react-dom';

import styles from './app.css';
import fonts from './font.css';

import HomePage from "./components/home-page.js";

class App extends React.Component {
  render () {
    return (
      <div id="top">
        <HomePage />
  		</div>
    );
  }
}

render(<App/>, document.getElementById('app'));
