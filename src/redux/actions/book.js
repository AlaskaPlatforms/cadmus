const bookActions = {
  addBookRequest: ['book', 'history'],
  addBookSuccess: null,
  addBookFailure: ['error'],
  
  getBooksRequest: ['userId'],
  getBooksSuccess: ['books'],
  getBooksFailure: ['error'],
  
  getBookRequest: ['book'],
  getBookSuccess: ['book'],
  getBookFailure: ['error'],

  addChapterRequest: ['chapter', 'history'],
  addChapterSuccess: null,
  addChapterFailure: ['error'],

  getChapterRequest: ['chapterId'],
  getChapterSuccess: ['chapter'],
  getChapterFailure: ['error']
}

export default bookActions
