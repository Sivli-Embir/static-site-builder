import React from 'react';
import {render} from 'react-dom';

import styles from './app.css';
import fonts from './font.css';

import {
  BrowserRouter as Router,
  Route,
  NavLink, Switch, withRouter
} from 'react-router-dom'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

import HomePage from "./components/home-page.js";

class App extends React.Component {
  constructor() {
    super()
    // run once on app launch
    this.basename = window.location.pathname
  }
  render () {
    return (
      <Router basename={this.basename}>
        <div>
          <ul className='navigation'>
            <li><NavLink exact activeClassName="selected" to="/">Home</NavLink></li>
            <li><NavLink activeClassName="selected" to="/example1">example1</NavLink></li>
            <li><NavLink activeClassName="selected" to="/example2">example2</NavLink></li>
          </ul>
          <AnimatedRouter />
        </div>
  		</Router>
    );
  }
}

class AnimatedRouter extends React.Component {
  render () {
    let {location} = this.props;
    return (
      <div className='page-transition'>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={500}
            classNames="fade">
            <Switch location={location}>
              <Route exact path="/" component={HomePage}/>
              <Route path="/example1" component={example1}/>
              <Route path="/example2" component={example2}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

AnimatedRouter = withRouter(AnimatedRouter)
const example1 = () => <div>example1</div>
const example2 = () => <div>example2</div>

render(<App/>, document.getElementById('app'));
