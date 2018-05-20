import { createActions } from 'reduxsauce'

import auth from './auth'
import book from './book'
import user from './user'

const actions = Object.assign({}, auth, book, user)

export const { Types, Creators } = createActions(actions)
