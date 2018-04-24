import { createActions } from 'reduxsauce'

import auth from './auth'

const actions = Object.assign({

  addBookRequest: ['book'],
  addBookSuccess: null,
  addBookFailure: ['error']

}, auth)

export const { Types, Creators } = createActions(actions)
