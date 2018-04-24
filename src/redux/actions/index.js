import { createActions } from 'reduxsauce'

import auth from './auth'
import book from './book'

const actions = Object.assign({}, auth, book)

export const { Types, Creators } = createActions(actions)
