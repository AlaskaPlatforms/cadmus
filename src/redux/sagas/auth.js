import { call, put } from 'redux-saga/effects'

import { Creators } from '../actions'

export function* authUser (api, { email, password, history }) {
  try {
    const { data: { token, parsedUser }, ok } = yield call(api.authUser, { email, password })
    if (ok) {
      yield put(Creators.authSuccess({ token, parsedUser }))
      yield put(Creators.storeUserInfo(parsedUser))
      yield put(Creators.openSnackbar(`Bem-vindo ${parsedUser.username}!`))
      history.push('/books')
    } else {
      yield put(Creators.authFailure('Falha ao autenticar'))
      yield put(Creators.openSnackbarError(`Falha ao autenticar`))
    }
  } catch (error) {
    yield put(Creators.openSnackbarError(`Falha ao autenticar`))
    yield put(Creators.authFailure(error))
  }
}

export default authUser
