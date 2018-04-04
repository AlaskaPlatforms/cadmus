import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router'

import PrivateRoute from '@components/PrivateRoute'

import Login from '@views/Login'
import Home from '@views/Home'
import UserPanel from '@views/UserPanel'

class Routes extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/login' component={ Login } />
            <Route path='/' component={ UserPanel } />
            <Route path='/user' component={ UserPanel }/>
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = ({}) => ({})

export default connect(mapStateToProps)(Routes)
