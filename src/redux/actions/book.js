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
  getChapterFailure: ['error'],

  updateChapterRequest: ['chapter', 'history'],
  updateChapterSuccess: null,
  updateChapterFailure: ['error'],

  deleteChapterRequest: ['chapter', 'history'],
  deleteChapterSuccess: null,
  deleteChapterFailure: ['error']
}

export default bookActions
