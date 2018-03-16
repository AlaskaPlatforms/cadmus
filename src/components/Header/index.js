import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper blue darken-4">
          <a href="/" className="brand-logo">
            <i style={{marginLeft: '25px'}}className="material-icons">book</i>
            Cadmus
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a>Sign in</a></li>
            <li><a>Sign up</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}