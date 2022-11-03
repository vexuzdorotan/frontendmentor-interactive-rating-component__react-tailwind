import React, { useContext } from 'react'
import { GlobalContext } from '../shared/context/GlobalState'

import Circle from './Circle'
import { ReactComponent as IconStar } from '../images/icon-star.svg'

const SelectRate = () => {
  const { submitRate } = useContext(GlobalContext)

  const arrNumber = [1, 2, 3, 4, 5]

  const handleSubmit = () => {
    submitRate()
  }

  return (
    <>
      <div className='flex justify-center items-center w-14 h-14 bg-neutralDarkBlue rounded-full mb-10'>
        <IconStar style={{ transform: 'scale(1.2)' }} />
      </div>

      <h1 className='text-4xl font-bold mb-5'>How did we do?</h1>

      <p className='text-lg text-slate-300 mb-10'>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className='flex justify-between mb-10'>
        {arrNumber.map((num) => (
          <Circle key={num} rateNumber={num} />
        ))}
      </div>

      <button
        type='submit'
        className='block w-full bg-primaryOrange hover:bg-neutralWhite hover:text-primaryOrange uppercase h-12 rounded-2xl'
        onClick={() => handleSubmit()}
      >
        Submit
      </button>
    </>
  )
}

export default SelectRate
