import React, { Component } from 'react'
import Header from '../Header'
import Login from '../Login'
import Routes from '../Router'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes />
      </div>
    )
  }
}