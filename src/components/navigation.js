import React from 'react';
import { NavLink, withRouter, Route, Switch } from 'react-router-dom'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

import HomePage from "./home-page.js";
import AboutPage from "./about-page.js";


export default class Navigation extends React.Component {
  constructor() {
    super()
    this.state = {open: false}
  }
  render() {
    let isOpen = this.state.open;
    return (
      <div className='nav-wrapper'>
        <nav>
          <ul>
            <li className={isOpen ? 'animate' : ''} >
              <NavLink onClick={this.navClick()} exact to='/' activeClassName='active' >
                <i className="fa fa-home" aria-hidden="true"></i>
                <span>HOME</span>
              </NavLink>
            </li>
            <li className={isOpen ? 'animate' : ''} >
              <NavLink onClick={this.navClick()} to='/about' activeClassName='active'>
              <i className="fa fa-info-circle" aria-hidden="true"></i>
              <span>About</span>
              </NavLink>
            </li>
            <li className={isOpen ? 'animate' : ''} >
              <NavLink onClick={this.navClick()} to='/about' activeClassName='active'>
              <i className="fa fa-info-circle" aria-hidden="true"></i>
              <span>About</span>
              </NavLink>
            </li>
            <li className={isOpen ? 'animate' : ''} >
              <NavLink onClick={this.navClick()} to='/about' activeClassName='active'>
              <i className="fa fa-info-circle" aria-hidden="true"></i>
              <span>About</span>
              </NavLink>
            </li>
            <li className={isOpen ? 'animate' : ''} >
              <NavLink onClick={this.navClick()} to='/about' activeClassName='active'>
              <i className="fa fa-info-circle" aria-hidden="true"></i>
              <span>About</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={`container ${isOpen ? 'nav-open': ''}`}>
          <div className="menu-icon" onClick={() => this.setState({open: !isOpen})}>
            <div className={`wrapper ${isOpen ? 'open': ''}`}><span></span></div>
          </div>
          <AnimatedRouter />
        </div>
      </div>
    )
  }
  navClick() {
    let self = this;
    return function(e) {
      if (this.className) e.preventDefault()
      else self.setState({open: false})
    }
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
