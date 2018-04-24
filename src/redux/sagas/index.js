import { takeLatest } from 'redux-saga/effects'

import { Types } from './../actions'

import authUser from './auth'
import { addBook } from './book'

import API from '@/services/API'

const api = API.create()

const sagas = function* sagas () {
  yield[
    takeLatest(Types.AUTH_REQUEST, authUser, api),
    takeLatest(Types.ADD_BOOK_REQUEST, addBook, api)
  ]
}

export default sagas
