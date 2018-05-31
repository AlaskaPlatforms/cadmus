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
  const registerUser = ({ email, username, password }) => api.post(`api/v1/signup`, { email, username, password })
  return {
    checkApiStatus,
    authUser,
    addBook,
    registerUser
  }
}

export default {
  create
}
