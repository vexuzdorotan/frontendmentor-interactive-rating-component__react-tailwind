import React, { createContext, useReducer } from 'react'

import GlobalReducer, { SELECT_RATE, SET_THANK_YOU } from './GlobalReducer'

const initialState = {
  selectedRate: 0,
  isThankYou: false,
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState)

  const updateRate = (selectedRate) => {
    dispatch({
      type: SELECT_RATE,
      payload: selectedRate,
    })
  }

  const submitRate = () => {
    dispatch({
      type: SET_THANK_YOU,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        selectedRate: state.selectedRate,
        isThankYou: state.isThankYou,
        updateRate,
        submitRate,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
