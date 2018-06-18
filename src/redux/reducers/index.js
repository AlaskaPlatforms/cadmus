import { combineReducers } from 'redux'

import auth from './auth'
import book from './book'
import user from './user'
import snackbar from './snackbar'

export const reducers = {
  auth,
  book,
  user,
  snackbar
}

export default combineReducers(reducers)
