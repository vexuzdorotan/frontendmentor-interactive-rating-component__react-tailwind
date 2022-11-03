import React, { useContext } from 'react'
import { GlobalContext } from '../shared/context/GlobalState'

const ThankYou = () => {
  const { selectedRate } = useContext(GlobalContext)

  return <>You selected {selectedRate} out of 5</>
}

export default ThankYou
