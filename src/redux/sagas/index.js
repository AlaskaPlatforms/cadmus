import { takeLatest } from 'redux-saga/effects'

import { Types } from './../actions'

import authUser from './auth'
import {
  addBook,
  getBooks,
  getAllBooks,
  getBook,
  deleteBook,
  addChapter,
  getChapter,
  updateChapter,
  deleteChapter
} from './book'
import { registerUser } from './user'

import API from '@/services/API'

const api = API.create()

const sagas = function* sagas () {
  yield[
    takeLatest(Types.AUTH_REQUEST, authUser, api),
    takeLatest(Types.ADD_BOOK_REQUEST, addBook, api),
    takeLatest(Types.GET_BOOKS_REQUEST, getBooks, api),
    takeLatest(Types.GET_ALL_BOOKS_REQUEST, getAllBooks, api),
    takeLatest(Types.GET_BOOK_REQUEST, getBook, api),
    takeLatest(Types.DELETE_BOOK_REQUEST, deleteBook, api),
    takeLatest(Types.ADD_CHAPTER_REQUEST, addChapter, api),
    takeLatest(Types.GET_CHAPTER_REQUEST, getChapter, api),
    takeLatest(Types.UPDATE_CHAPTER_REQUEST, updateChapter, api),
    takeLatest(Types.DELETE_CHAPTER_REQUEST, deleteChapter, api),
    takeLatest(Types.USER_REGISTER_REQUEST, registerUser, api),
  ]
}

export default sagas
