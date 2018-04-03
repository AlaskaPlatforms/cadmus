import { createActions } from 'reduxsauce'

import auth from './auth'

const actions = Object.assign({}, auth)

export const { Types, Creators } = createActions(actions)
