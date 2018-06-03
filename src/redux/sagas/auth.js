import { call, put } from 'redux-saga/effects'

import { Creators } from '../actions'

export function* authUser (api, { email, password, history }) {
  try {
    const { data: { token, parsedUser }, ok } = yield call(api.authUser, { email, password })
    if (ok) {
      yield put(Creators.authSuccess({ token, parsedUser }))
      yield put(Creators.storeUserInfo(parsedUser))
      history.push('/new-book')
    } else {
      yield put(Creators.authFailure('Falha ao autenticar'))
    }
  } catch (error) {
    yield put(Creators.authFailure(error))
  }
}

export default authUser
