import { combineReducers } from 'redux'

import auth from './auth'
import book from './book'
import user from './user'

export const reducers = {
  auth,
  book,
  user
}

export default combineReducers(reducers)
