import Immutable from 'seamless-immutable'

import { createReducer } from 'reduxsauce'

import { Types } from './../actions'

export const INITIAL_STATE = Immutable({
  attemptingAuth: false,
  authenticated: false,
  token: null,
  error: null,
  user: {}
})

export const authUserRequest = (state = INITIAL_STATE, { ok }) => Object.assign({}, state, { attemptingAuth: true })

export const authUserSuccess = (state = INITIAL_STATE, { token, user }) => Object.assign({}, state, { attemptingAuth: false, authenticated: true, token, user })

export const authUserFailure = (state = INITIAL_STATE, { error }) => Object.assign({}, state, { attemptingAuth: false, authenticated: false, error })

export const unauthUser = () => INITIAL_STATE

const HANDLERS = {
  [Types.AUTH_REQUEST]: authUserRequest,
  [Types.AUTH_SUCCESS]: authUserSuccess,
  [Types.AUTH_FAILURE]: authUserFailure,
  [Types.AUTH_REMOVER]: unauthUser
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)

export const isUserAuthed = ({ authenticated }) => authenticated

export const getUserToken = ({ token }) => token

export default reducer
