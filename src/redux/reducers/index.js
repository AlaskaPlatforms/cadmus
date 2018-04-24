import { combineReducers } from 'redux'

import auth from './auth'
import book from './BookReducer'

export const reducers = {
  auth,
  book
}

export default combineReducers(reducers)
