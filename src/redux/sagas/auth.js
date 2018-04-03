import { call, put } from 'redux-saga/effects'

import { Types } from './../actions'

const authUser = function* authUser (api, { userName, password }) {
  try {
    const { headers: { authorization }, ok } = yield call(api.authUser, { userName, password })
    if (ok) {
      yield put({ type: Types.AUTH_SUCCESS, token: authorization })
    } else {
      yield put({ type: Types.AUTH_FAILURE, error: 'Falha ao autenticar' })
    }
  } catch (error) {
    yield put({ type: Types.AUTH_FAILURE, error })
  }
}

export default authUser
