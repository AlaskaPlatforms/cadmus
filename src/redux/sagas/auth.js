import { call, put } from 'redux-saga/effects'
import { Creators } from '../actions'

export function* authUser (api, { email, password }) {
  try {
    const { headers: { authorization }, ok } = yield call(api.authUser, { email, password })
    if (ok) {
      yield put(Creators.authSuccess(authorization))
    } else {
      yield put(Creators.authFailure('Falha ao autenticar'))
    }
  } catch (error) {
    yield put(Creators.authFailure(error))
  }
}

export default authUser
