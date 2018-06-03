import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

import { Types } from '../actions'

export const INITIAL_STATE = Immutable({
  error: false,
  writing: false,
  fetching: false,
  books: [],
  book: {}
})

export const addBookRequest = (state = INITIAL_STATE) => state.merge({ writing: true })

export const addBookSuccess = (state = INITIAL_STATE) => state.merge({ error: false, writing: false })

export const addBookFailure = (state = INITIAL_STATE, { error }) => state.merge({ error, writing: false })

export const getBooksRequest = (state = INITIAL_STATE) => state.merge({ fetching: true })

export const getBooksSuccess = (state = INITIAL_STATE, { books }) => state.merge({ error: false, fetching: false, books })

export const getBooksFailure = (state = INITIAL_STATE, { error }) => state.merge({ error, fetching: false })

export const getBookRequest = (state = INITIAL_STATE) => state.merge({ fetching: true })

export const getBookSuccess = (state = INITIAL_STATE, { book }) => state.merge({ error: false, fetching: false, book })

export const getBookFailure = (state = INITIAL_STATE, { error }) => state.merge({ error, fetching: false })

const HANDLERS = {
  [Types.ADD_BOOK_REQUEST]: addBookRequest,
  [Types.ADD_BOOK_SUCCESS]: addBookSuccess,
  [Types.ADD_BOOK_FAILURE]: addBookFailure,
  [Types.GET_BOOKS_REQUEST]: getBooksRequest,
  [Types.GET_BOOKS_SUCCESS]: getBooksSuccess,
  [Types.GET_BOOKS_FAILURE]: getBooksFailure,
  [Types.GET_BOOK_REQUEST]: getBookRequest,
  [Types.GET_BOOK_SUCCESS]: getBookSuccess,
  [Types.GET_BOOK_FAILURE]: getBookFailure
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)

export default reducer
