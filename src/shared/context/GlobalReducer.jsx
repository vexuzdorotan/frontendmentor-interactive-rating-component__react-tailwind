export const SELECT_RATE = 'SELECT_RATE'
export const SET_THANK_YOU = 'SET_THANK_YOU'

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case SELECT_RATE: {
      return {
        ...state,
        selectedRate: action.payload,
      }
    }
    case SET_THANK_YOU: {
      return {
        ...state,
        isThankYou: true,
      }
    }
    default:
      return state
  }
}

export default GlobalReducer
