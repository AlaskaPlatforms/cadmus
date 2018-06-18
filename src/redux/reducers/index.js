import { combineReducers } from 'redux'

import auth from './auth'
import book from './book'
import user from './user'
import snackbar from './snackbar'
import sidebar from './sidebar'

export const reducers = {
  auth,
  book,
  user,
  snackbar,
  sidebar
}

export default combineReducers(reducers)
