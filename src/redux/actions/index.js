import { createActions } from 'reduxsauce'

import auth from './auth'
import book from './book'
import user from './user'
import snackbar from './snackbar'

const actions = Object.assign({}, auth, book, user, snackbar)

export const { Types, Creators } = createActions(actions)
