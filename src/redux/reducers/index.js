import { combineReducers } from 'redux'

import auth from './auth'
import book from './book'

export const reducers = {
  auth,
  book
}

export default combineReducers(reducers)
