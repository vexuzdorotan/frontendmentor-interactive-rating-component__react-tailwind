import React from 'react'

const Circle = ({ text }) => {
  return (
    <div className='flex justify-center items-center w-14 h-14 bg-neutralDarkBlue rounded-full'>
      <p>{text}</p>
    </div>
  )
}

export default Circle
