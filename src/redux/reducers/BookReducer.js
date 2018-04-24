import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

import { Types } from '../actions'

export const INITIAL_STATE = Immutable({
  error: false,
  fetching: false
})

export const addBookRequest = (state = INITIAL_STATE) =>
  Object.assign({}, state, { fetching: true })

export const addBookSuccess = (state = INITIAL_STATE, { city }) =>
  Object.assign({}, state, { error: false, fetching: false, city })

export const addBookFailure = (state = INITIAL_STATE, { error }) =>
  Object.assign({}, state, { error, fetching: false })

export const HANDLERS = {
  [Types.ADD_BOOK_REQUEST]: addBookRequest,
  [Types.ADD_BOOK_SUCCESS]: addBookSuccess,
  [Types.ADD_BOOK_FAILURE]: addBookFailure
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)

export default reducer