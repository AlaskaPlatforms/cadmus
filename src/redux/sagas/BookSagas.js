import { call, put} from 'redux-saga/effects'
import { Creators } from '../actions'

export function * addBook (api, { book }) {
  const response = yield call(api.addBook, { book })
  const { data } = response
  if (response.ok) {
    yield put(Creators.addBookSuccess(data))
  } else {
    const { error } = data
    yield put(Creators.addBookFailure(error))
  }
}
