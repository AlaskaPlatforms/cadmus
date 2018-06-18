import { createActions } from 'reduxsauce'

import auth from './auth'
import book from './book'
import user from './user'
import snackbar from './snackbar'
import sidebar from './sidebar'

const actions = Object.assign({}, auth, book, user, snackbar, sidebar)

export const { Types, Creators } = createActions(actions)
