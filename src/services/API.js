import apisauce from 'apisauce'
import config from '../config'

const create = (baseURL = config.apiURL) => {
  const api = apisauce.create({
    baseURL,
    headers: { 'Content-Type': 'application/json' },
    timeout: 10000
  })

  const checkApiStatus = () => api.get('/')
  const authUser = ({ email, password }) => api.post(`api/v1/auth`, { email, password }).then(response => response)
  const addBook = ({ book: { title, description, userId } }) => api.post(`api/v1/book`, { title, description, userId })
  const getBooks = ({ userId }) => api.get(`api/v1/books/${userId}`, {})
  const getBook = ({ book }) => api.get(`api/v1/book/${book}`, {})
  const addChapter = ({ chapter: { index, text, bookId } }) => api.post('api/v1/chapter', { index, text, bookId })
  const deleteChapter = ({ chapterId }) => api.delete(`api/v1/chapter/${chapterId}`, {})
  const updateChapter = ({ chapter: { text, chapterId } }) => api.put(`api/v1/chapter/${chapterId}`, { text })
  const getChapter = ({ chapterId }) => api.get(`api/v1/chapter/${chapterId}`, {})
  const registerUser = ({ email, username, password }) => api.post(`api/v1/signup`, { email, username, password })
  return {
    checkApiStatus,
    authUser,
    addBook,
    getBooks,
    getBook,
    addChapter,
    deleteChapter,
    updateChapter,
    getChapter,
    registerUser
  }
}

export default {
  create
}
