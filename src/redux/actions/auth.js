const authActions = {
  authRequest: ['email', 'password'],
  authSuccess: ['token', 'user'],
  authFailure: ['error'],
  authRemover: null
}

export default authActions
