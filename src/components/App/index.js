import React, { Component } from 'react'
import Header from '../Header'
import Login from '../Login'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Login/>
      </div>
    )
  }
}