import React, { createContext, useReducer } from 'react'

import GlobalReducer, { SELECT_RATE } from './GlobalReducer'

const initialState = {
  selectedRate: 0,
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

  return (
    <GlobalContext.Provider
      value={{ selectedRate: state.selectedRate, updateRate }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
