import React from 'react';
import { NavLink } from 'react-router-dom'


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
              <NavLink onClick={this.navClick()} exact to='/' activeClassName='active' ><h1>HOME</h1></NavLink>
            </li>
            <li className={isOpen ? 'animate' : ''} >
              <NavLink onClick={this.navClick()} to='/about' activeClassName='active'><h1>About</h1></NavLink>
            </li>
            <li className={isOpen ? 'animate' : ''}>
              <NavLink onClick={this.navClick()} to='/example2' activeClassName='active'><h1>Example 2</h1></NavLink>
            </li>
          </ul>
        </nav>
        <div className={`container ${isOpen ? 'nav-open': ''}`}>
          <div className={`menu-icon ${isOpen ? 'open': ''}`} onClick={() => this.setState({open: !isOpen})}><span></span></div>
          {this.props.children}
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
