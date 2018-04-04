import React, { Component } from 'react'
import { Form, InputContainer, FormHeader} from './styles'

export default class  UserPanel extends Component {

  renderNavBar() {
    return (
      <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="sass.html">Meus Livros</a></li>
          <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>
          <ul id = "dropdown" class = "dropdown-content">
            <li><a href = "#">Inbox<span class = "badge">12</span></a></li>
            <li><a href = "#!">Unread<span class = "new badge">4</span></a></li>
            <li><a href = "#">Sent</a></li>
            <li class = "divider"></li>
            <li><a href = "#">Outbox<span class = "badge">14</span></a></li>
          </ul>
        </ul>
      </div>
    </nav>
    )
  }
  
  render(){
    return (
      <div>
        {this.renderNavBar()}
      </div>
    )
  }
}