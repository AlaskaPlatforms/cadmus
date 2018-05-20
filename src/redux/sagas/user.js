import { call, put } from 'redux-saga/effects'

import { Creators } from '../actions'

export function* registerUser (api, { email, username, password }) {
  try {
    const { data, ok } = yield call(api.registerUser, { email, username, password })
    if (ok) {
      yield put(Creators.userRegisterSuccess(data))
    } else {
      const { error } = data
      yield put(Creators.userRegisterFailure(error))
    }
  } catch (error) {
    yield put(Creators.userRegisterFailure(error))
  }
}
