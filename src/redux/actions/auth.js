const authActions = {
  authRequest: ['email', 'password','history'],
  authSuccess: ['token', 'user'],
  authFailure: ['error'],
  authRemover: null
}

export default authActions
