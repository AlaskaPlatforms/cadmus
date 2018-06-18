import { combineReducers } from 'redux'

import auth from './auth'
import book from './book'
import user from './user'
import sideBar from './sideBar'

export const reducers = {
  auth,
  book,
  user,
  sideBar
}

export default combineReducers(reducers)
