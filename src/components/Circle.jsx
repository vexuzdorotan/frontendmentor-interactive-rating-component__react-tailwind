import React, { useContext } from 'react'

import { GlobalContext } from '../shared/context/GlobalState'

const Circle = ({ rateNumber }) => {
  const { selectedRate, updateRate } = useContext(GlobalContext)

  const rateButtonOnClick = (rate) => {
    updateRate(rate)
  }

  const bgClass =
    selectedRate === rateNumber ? 'bg-primaryOrange' : 'bg-neutralDarkBlue'

  return (
    <button
      className={`flex justify-center items-center w-14 h-14 ${bgClass} rounded-full hover:cursor-pointer hover:bg-neutralMediumGrey`}
      onClick={() => rateButtonOnClick(rateNumber)}
    >
      {rateNumber}
    </button>
  )
}

export default Circle
