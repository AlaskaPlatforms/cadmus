import { call, put } from 'redux-saga/effects'
import { Creators } from '../actions'

export function* addBook (api, { book, history }) {
  try {
    const { data, ok } = yield call(api.addBook, { book })
    if (ok) {
      yield put(Creators.addBookSuccess(data))
      history.push('/books')
    } else {
      const { error } = data
      yield put(Creators.addBookFailure(error))
    }
  } catch (error) {
    yield put(Creators.addBookFailure(error))
  }
}

export function* getBooks (api, { userId }) {
  try {
    const { data, ok } = yield call(api.getBooks, { userId })
    if (ok) {
      yield put(Creators.getBooksSuccess(data))
    } else {
      const { error } = data
      yield put(Creators.getBooksFailure(error))
    }
  } catch (error) {
    yield put(Creators.getBooksFailure(error))
  }
}

export function* getBook (api, { book }) {
  try {
    const { data, ok } = yield call(api.getBook, { book })
    if (ok) {
      yield put(Creators.getBookSuccess(data[0]))
    } else {
      const { error } = data
      yield put(Creators.getBookFailure(error))
    }
  } catch (error) {
    yield put(Creators.getBookFailure(error))
  }
}

export function* addChapter (api, { chapter, history }) {
  console.log(chapter)
  try {
    const { data, ok } = yield call(api.addChapter, { chapter })
    if (ok) {
      yield put(Creators.addChapterSuccess())
      history.push(`/book/${chapter.bookId}`)
    } else {
      const { error } = data
      yield put(Creators.addChapterFailure(error))
    }
  } catch (error) {
    yield put(Creators.addChapterFailure(error))
  }
}
