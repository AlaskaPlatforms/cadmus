import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router'

import PrivateRoute from '@components/PrivateRoute'

import Login from '@views/Login'
import Home from '@views/Home'
import CreateBook from '@views/CreateBook'
import Books from '@views/Books'
import Book from '@views/Book'
import Chapter from '@views/Chapter'

class Routes extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/login' component={ Login } />
            <Route exact path='/' component={ Home } />
            <Route path='/new-book' component={ CreateBook } />
            <Route path='/books' component={ Books } />
            <Route path='/book' component={ Book } />
            <Route path='/chapter' component={ Chapter } />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = ({}) => ({})

export default connect(mapStateToProps)(Routes)
