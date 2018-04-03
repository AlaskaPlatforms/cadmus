import apisauce from 'apisauce'
import config from '../config'

const create = (baseURL = config.apiURL) => {
  const api = apisauce.create({
    baseURL,
    headers: { 'Content-Type': 'application/json' },
    timeout: 10000
  })

  const checkApiStatus = () => api.get('/')
  const authUser = ({ userName, password }) => api.post(`${baseURL}/loginService/loginMobile`, { userName, password }).then(response => response)
  return {
    checkApiStatus,
    authUser
  }
}

export default {
  create
}
