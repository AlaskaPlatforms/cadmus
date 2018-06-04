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
import Sidebar from '@views/Sidebar'

class Routes extends Component {
  render () {
    const { isAuthed } = this.props
    return (
      <Router>
        <div>
          <Sidebar/>
          <Switch>
            <Route path='/login' component={ Login } />
            <Route exact path='/' component={ Home } />
            <Route extact path='/sidebar' component={ Sidebar }/>
            <PrivateRoute authed={ isAuthed } path='/new-book' component={ CreateBook } />
            <PrivateRoute authed={ isAuthed } path='/books' component={ Books } />
            <PrivateRoute exact authed={ isAuthed } path='/book/:book' component={ Book } />
            <PrivateRoute exact authed={ isAuthed } path='/book/:bookId/chapter' component={ Chapter } />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  isAuthed: auth.authenticated
})

export default connect(mapStateToProps)(Routes)
