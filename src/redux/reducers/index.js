import { combineReducers } from 'redux'

import auth from './auth'

export const reducers = {
  auth
}

export default combineReducers(reducers)
