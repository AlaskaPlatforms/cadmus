import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

import { Types } from '../actions'

export const INITIAL_STATE = Immutable({
  error: false,
  writing: false,
  fetching: false,
  updating: false,
  removing: false,
  books: [],
  book: {},
  chapter: {}
})

export const addBookRequest = (state = INITIAL_STATE) => state.merge({ writing: true })

export const addBookSuccess = (state = INITIAL_STATE) => state.merge({ error: false, writing: false })

export const addBookFailure = (state = INITIAL_STATE, { error }) => state.merge({ error, writing: false })

export const getBooksRequest = (state = INITIAL_STATE) => state.merge({ fetching: true })

export const getBooksSuccess = (state = INITIAL_STATE, { books }) => state.merge({ error: false, fetching: false, books })

export const getBooksFailure = (state = INITIAL_STATE, { error }) => state.merge({ error, fetching: false })

export const getAllBooksRequest = (state = INITIAL_STATE) => state.merge({ fetching: true })

export const getAllBooksSuccess = (state = INITIAL_STATE, { books }) => state.merge({ error: false, fetching: false, books })

export const getAllBooksFailure = (state = INITIAL_STATE, { error }) => state.merge({ error, fetching: false })

export const getBookRequest = (state = INITIAL_STATE) => state.merge({ fetching: true })

export const getBookSuccess = (state = INITIAL_STATE, { book }) => state.merge({ error: false, fetching: false, book })

export const getBookFailure = (state = INITIAL_STATE, { error }) => state.merge({ error, fetching: false })

export const deleteBookRequest = (state = INITIAL_STATE) => state.merge({ removing: true })

export const deleteBookSuccess = (state = INITIAL_STATE) => state.merge({ error: false, removing: false })

export const deleteBookFailure = (state = INITIAL_STATE, { error }) => state.merge({ error, removing: false })

export const addChapterRequest = (state = INITIAL_STATE) => state.merge({ writing: true })

export const addChapterSuccess = (state = INITIAL_STATE) => state.merge({ error: false, writing: false })

export const addChapterFailure = (state = INITIAL_STATE, { error }) => state.merge({ error, writing: false })

export const getChapterRequest = (state = INITIAL_STATE) => state.merge({ fetching: true })

export const getChapterSuccess = (state = INITIAL_STATE, { chapter }) => state.merge({ fetching: false, chapter })

export const getChapterFailure = (state = INITIAL_STATE, { error }) => state.merge({ fetching: false, error })

export const updateChapterRequest = (state = INITIAL_STATE) => state.merge({ updating: true })

export const updateChapterSuccess = (state = INITIAL_STATE) => state.merge({ updating: false })

export const updateChapterFailure = (state = INITIAL_STATE, { error }) => state.merge({ updating: false, error })

export const deleteChapterRequest = (state = INITIAL_STATE) => state.merge({ removing: true })

export const deleteChapterSuccess = (state = INITIAL_STATE) => state.merge({ removing: false })

export const deleteChapterFailure = (state = INITIAL_STATE, { error }) => state.merge({ removing: false, error })

const HANDLERS = {
  [Types.ADD_BOOK_REQUEST]: addBookRequest,
  [Types.ADD_BOOK_SUCCESS]: addBookSuccess,
  [Types.ADD_BOOK_FAILURE]: addBookFailure,
  [Types.GET_BOOKS_REQUEST]: getBooksRequest,
  [Types.GET_BOOKS_SUCCESS]: getBooksSuccess,
  [Types.GET_BOOKS_FAILURE]: getBooksFailure,
  [Types.GET_ALL_BOOKS_REQUEST]: getAllBooksRequest,
  [Types.GET_ALL_BOOKS_SUCCESS]: getAllBooksSuccess,
  [Types.GET_ALL_BOOKS_FAILURE]: getAllBooksFailure,
  [Types.GET_BOOK_REQUEST]: getBookRequest,
  [Types.GET_BOOK_SUCCESS]: getBookSuccess,
  [Types.GET_BOOK_FAILURE]: getBookFailure,
  [Types.DELETE_BOOK_REQUEST]: deleteBookRequest,
  [Types.DELETE_BOOK_SUCCESS]: deleteBookSuccess,
  [Types.DELETE_BOOK_FAILURE]: deleteBookFailure,
  [Types.ADD_CHAPTER_REQUEST]: addChapterRequest,
  [Types.ADD_CHAPTER_SUCCESS]: addChapterSuccess,
  [Types.ADD_CHAPTER_FAILURE]: addChapterFailure,
  [Types.GET_CHAPTER_REQUEST]: getChapterRequest,
  [Types.GET_CHAPTER_SUCCESS]: getChapterSuccess,
  [Types.GET_CHAPTER_FAILURE]: getChapterFailure,
  [Types.UPDATE_CHAPTER_REQUEST]: updateChapterRequest,
  [Types.UPDATE_CHAPTER_SUCCESS]: updateChapterSuccess,
  [Types.UPDATE_CHAPTER_FAILURE]: updateChapterFailure,
  [Types.DELETE_CHAPTER_REQUEST]: deleteChapterRequest,
  [Types.DELETE_CHAPTER_SUCCESS]: deleteChapterSuccess,
  [Types.DELETE_CHAPTER_FAILURE]: deleteChapterFailure
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)

export default reducer
