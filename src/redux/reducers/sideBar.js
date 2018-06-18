import Immutable from 'seamless-immutable'

import { createReducer } from 'reduxsauce'

import { Types } from './../actions'

export const INITIAL_STATE = Immutable({
  isLarge: false
})

export const changeSidebar = (state = INITIAL_STATE) => Object.assign({}, state, { isLarge: !state.isLarge })

const HANDLERS = {
  [Types.CHANGE_SIDEBAR]: changeSidebar
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)

export default reducer
