import React, { Component } from 'react'
import {Router, Route, Redirect } from 'react-router'
import { BrowserRouter, HashRouter } from 'react-router-dom'

import Login from '../Login/index.js'
import Home from '../Home/index.js'

export default class Routes extends Component {
  render(){
    return(
      <HashRouter>
        <div>
          <Route path='/login' component={ Login }/>
          <Route path='/home' component={ Home }/>
          
        </div>
      </HashRouter>
    )
  }
}