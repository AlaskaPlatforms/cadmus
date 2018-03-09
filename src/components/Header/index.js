import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper blue darken-4">
          <a href="#" class="brand-logo">Cadmus</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a>Sign in</a></li>
            <li><a>Sign up</a></li>
          </ul>
        </div>
    </nav>
    )
  }
}