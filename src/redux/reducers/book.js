import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

import { Types } from '../actions'

export const INITIAL_STATE = Immutable({
  error: false,
  writing: false
})

export const addBookRequest = (state = INITIAL_STATE) => state.merge({ writing: true })

export const addBookSuccess = (state = INITIAL_STATE) => state.merge({ error: false, writing: false })

export const addBookFailure = (state = INITIAL_STATE, { error }) => state.merge({ error, writing: false })

const HANDLERS = {
  [Types.ADD_BOOK_REQUEST]: addBookRequest,
  [Types.ADD_BOOK_SUCCESS]: addBookSuccess,
  [Types.ADD_BOOK_FAILURE]: addBookFailure
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)

export default reducer
