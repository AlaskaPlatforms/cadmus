import Immutable from 'seamless-immutable'

import { createReducer } from 'reduxsauce'

import { Types } from './../actions'

export const INITIAL_STATE = Immutable({
  registering: false,
  error: null,
  user: {}
})

export const storeUserInfo = (state = INITIAL_STATE, { user }) => Object.assign({}, state, { user })

export const userRegisterRequest = (state = INITIAL_STATE, { ok }) => state.merge({ registering: true })

export const userRegisterSuccess = (state = INITIAL_STATE) => state.merge({ registering: false })

export const userRegisterFailure = (state = INITIAL_STATE, { error }) => state.merge({ registering: false, error })

export const unauthUser = () => INITIAL_STATE

const HANDLERS = {
  [Types.USER_REGISTER_REQUEST]: userRegisterRequest,
  [Types.USER_REGISTER_SUCCESS]: userRegisterSuccess,
  [Types.USER_REGISTER_FAILURE]: userRegisterFailure,
  [Types.STORE_USER_INFO]: storeUserInfo
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)

export default reducer
