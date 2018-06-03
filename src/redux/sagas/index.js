import { takeLatest } from 'redux-saga/effects'

import { Types } from './../actions'

import authUser from './auth'
import { addBook, getBooks, getBook } from './book'
import { registerUser } from './user'

import API from '@/services/API'

const api = API.create()

const sagas = function* sagas () {
  yield[
    takeLatest(Types.AUTH_REQUEST, authUser, api),
    takeLatest(Types.ADD_BOOK_REQUEST, addBook, api),
    takeLatest(Types.GET_BOOKS_REQUEST, getBooks, api),
    takeLatest(Types.GET_BOOK_REQUEST, getBook, api),
    takeLatest(Types.USER_REGISTER_REQUEST, registerUser, api),
  ]
}

export default sagas
