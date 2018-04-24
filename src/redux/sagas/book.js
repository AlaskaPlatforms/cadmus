import { call, put} from 'redux-saga/effects'
import { Creators } from '../actions'

export function* addBook (api, { book }) {
  const { data, ok } = yield call(api.addBook, { book })
  if (ok) {
    yield put(Creators.addBookSuccess(data))
  } else {
    const { error } = data
    yield put(Creators.addBookFailure(error))
  }
}
