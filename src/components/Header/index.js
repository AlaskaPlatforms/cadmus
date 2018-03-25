import React, { Component } from 'react'
import { HeaderIcon } from './styles'

export default class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper blue darken-4">
          <a href="/" className="brand-logo">
            <HeaderIcon className="material-icons">book</HeaderIcon>
            Cadmus
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a>Entrar</a></li>
            <li><a>Registre-se</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}