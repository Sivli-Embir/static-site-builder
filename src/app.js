import React from 'react';
import {render} from 'react-dom';

import styles from './app.css';
import fonts from './font.css';

import {
  BrowserRouter as Router,
  Route, Switch, withRouter
} from 'react-router-dom'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

import Navigation from "./components/navigation.js";
import HomePage from "./components/home-page.js";
import AboutPage from "./components/about-page.js";


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
          <Navigation >
            <AnimatedRouter />
          </Navigation>
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
        <TransitionGroup className='transition-group'>
          <CSSTransition
            key={location.key}
            timeout={500}
            classNames="fade">
            <Switch location={location}>
              <Route exact path="/" component={HomePage}/>
              <Route path="/about" component={AboutPage}/>
              <Route path="/example2" component={example2}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

AnimatedRouter = withRouter(AnimatedRouter)
const example2 = () => <div>example2</div>

render(<App/>, document.getElementById('app'));
