import React, { useContext } from 'react'
import { GlobalContext } from '../shared/context/GlobalState'

import { ReactComponent as IllustrationThankYou } from '../images/illustration-thank-you.svg'

const ThankYou = () => {
  const { selectedRate } = useContext(GlobalContext)

  return (
    <div className='m-4'>
      <div className='flex justify-center items-center mb-10'>
        <IllustrationThankYou />
      </div>
      <div className='flex justify-center'>
        <p className='text-lg text-primaryOrange bg-neutralDarkBlue rounded-3xl inline-block mb-10 px-5 py-2'>
          You selected {selectedRate} out of 5
        </p>
      </div>
      <h1 className='text-center text-3xl mb-5'>Thank you!</h1>
      <p className='text-center text-neutralMediumGrey'>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  )
}

export default ThankYou
