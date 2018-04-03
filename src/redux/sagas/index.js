import { takeLatest } from 'redux-saga/effects'

import authUser from './auth'
import { Types } from './../actions'

import API from '@/services/API'

const api = API.create()

const sagas = function* sagas () {
  yield[
    takeLatest(Types.AUTH_REQUEST, authUser, api)
  ]
}

export default sagas
