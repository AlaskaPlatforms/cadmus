const INITIAL_STATE = { isLarge: true }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIDEBAR_SET_STATE':
      return { ...state, isLarge: action.payload }
    default:
      return state  
  }
}