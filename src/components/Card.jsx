import React, { useContext } from 'react'
import { GlobalContext } from '../shared/context/GlobalState'

import SelectRate from './SelectRate'
import ThankYou from './ThankYou'

const Card = () => {
  const { isThankYou } = useContext(GlobalContext)

  return (
    <div className='bg-gradient-to-b from-neutralDarkBlue to-neutralDarkBlueBottom text-white max-w-md p-10 rounded-3xl'>
      {!isThankYou ? <SelectRate /> : <ThankYou />}
    </div>
  )
}

export default Card
