import { call, put } from 'redux-saga/effects'
import { Creators } from '../actions'

export function* addBook (api, { book, history }) {
  try {
    const { data, ok } = yield call(api.addBook, { book })
    if (ok) {
      yield put(Creators.addBookSuccess(data))
      yield put(Creators.openSnackbar('Livro adicionado com sucesso!'))
      history.push('/books')
    } else {
      const { error } = data
      yield put(Creators.addBookFailure(error))
      yield put(Creators.openSnackbarError('Erro ao adicionar livro!'))
    }
  } catch (error) {
    yield put(Creators.addBookFailure(error))
    yield put(Creators.openSnackbarError('Erro ao adicionar livro!'))
  }
}

export function* getBooks (api, { userId }) {
  try {
    const { data, ok } = yield call(api.getBooks, { userId })
    if (ok) {
      yield put(Creators.getBooksSuccess(data))
    } else {
      const { error } = data
      yield put(Creators.getBooksFailure(error))
      yield put(Creators.openSnackbarError('Erro ao buscar livros!'))
    }
  } catch (error) {
    yield put(Creators.getBooksFailure(error))
    yield put(Creators.openSnackbarError('Erro ao buscar livros!'))
  }
}

export function* getAllBooks (api) {
  try {
    const { data, ok } = yield call(api.getAllBooks, {})
    if (ok) {
      yield put(Creators.getAllBooksSuccess(data))
    } else {
      const { error } = data
      yield put(Creators.getAllBooksFailure(error))
      yield put(Creators.openSnackbarError('Erro ao buscar livros!'))
    }
  } catch (error) {
    yield put(Creators.getAllBooksFailure(error))
    yield put(Creators.openSnackbarError('Erro ao buscar livros!'))
  }
}

export function* getBook (api, { book }) {
  try {
    const { data, ok } = yield call(api.getBook, { book })
    if (ok) {
      yield put(Creators.getBookSuccess(data[0]))
    } else {
      const { error } = data
      yield put(Creators.getBookFailure(error))
      yield put(Creators.openSnackbarError('Erro ao buscar livro!'))
    }
  } catch (error) {
    yield put(Creators.getBookFailure(error))
    yield put(Creators.openSnackbarError('Erro ao buscar livro!'))
  }
}

export function* deleteBook (api, { book: { bookId, userId } }) {
  try {
    const { data, ok } = yield call(api.deleteBook, { bookId })
    if (ok) {
      yield put(Creators.deleteBookSuccess())
      yield put(Creators.getBooksRequest(userId))
      yield put(Creators.openSnackbar('Livro apagado com sucesso!'))
    } else {
      const { error } = data
      yield put(Creators.deleteBookFailure(error))
      yield put(Creators.openSnackbarError('Erro ao apagar livro!'))
    }
  } catch (error) {
    yield put(Creators.deleteBookFailure(error))
    yield put(Creators.openSnackbarError('Erro ao apagar livro!'))
  }
}

export function* addChapter (api, { chapter, history }) {
  try {
    const { data, ok } = yield call(api.addChapter, { chapter })
    if (ok) {
      yield put(Creators.addChapterSuccess())
      yield put(Creators.openSnackbar('Capítulo adicionado com sucesso!'))
      history.push(`/book/${chapter.bookId}`)
    } else {
      const { error } = data
      yield put(Creators.addChapterFailure(error))
      yield put(Creators.openSnackbarError('Erro ao adicionar capítulo!'))
    }
  } catch (error) {
    yield put(Creators.addChapterFailure(error))
    yield put(Creators.openSnackbarError('Erro ao adicionar capítulo!'))
  }
}

export function* getChapter (api, { chapterId }) {
  try {
    const { data, ok } = yield call(api.getChapter, { chapterId })
    if (ok) {
      yield put(Creators.getChapterSuccess(data))
    } else {
      const { error } = data
      yield put(Creators.getChapterFailure(error))
      yield put(Creators.openSnackbarError('Erro ao recupar capítulo!'))
    }
  } catch (error) {
    yield put(Creators.getChapterFailure(error))
    yield put(Creators.openSnackbarError('Erro ao recupar capítulo!'))
  }
}

export function* updateChapter (api, { chapter, history }) {
  try {
    const { data, ok } = yield call(api.updateChapter, { chapter })
    if (ok) {
      yield put(Creators.updateChapterSuccess())
      yield put(Creators.openSnackbar('Capítulo alterado com sucesso!'))
      history.push(`/book/${chapter.bookId}`)
    } else {
      const { error } = data
      yield put(Creators.updateChapterFailure(error))
      yield put(Creators.openSnackbarError('Erro ao alterar capítulo!'))
    }
  } catch (error) {
    yield put(Creators.updateChapterFailure(error))
    yield put(Creators.openSnackbarError('Erro ao alterar capítulo!'))
  }
}

export function* deleteChapter (api, { chapter, history }) {
  try {
    const { chapterId, bookId } = chapter
    const { data, ok } = yield call(api.deleteChapter, { chapterId })
    if (ok) {
      yield put(Creators.deleteChapterSuccess())
      yield put(Creators.openSnackbar('Capítulo apagado com sucesso!'))
      history.push(`/book/${bookId}`)
    } else {
      const { error } = data
      yield put(Creators.deleteChapterFailure(error))
      yield put(Creators.openSnackbarError('Erro ao apagar capítulo!'))
    }
  } catch (error) {
    yield put(Creators.deleteChapterFailure(error))
    yield put(Creators.openSnackbarError('Erro ao apagar capítulo!'))
  }
}
