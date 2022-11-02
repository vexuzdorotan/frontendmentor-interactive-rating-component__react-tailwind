export const SELECT_RATE = 'SELECT_RATE'

export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case SELECT_RATE: {
      return {
        ...state,
        selectedRate: action.payload,
      }
    }
    default:
      return state
  }
}

export default GlobalReducer
