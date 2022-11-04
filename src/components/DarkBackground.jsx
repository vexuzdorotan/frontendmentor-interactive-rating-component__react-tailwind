import React from 'react'

const DarkBackground = ({ children }) => {
  return (
    <div className='flex justify-center items-center h-screen bg-neutralVeryDarkBlue'>
      {children}
    </div>
  )
}

export default DarkBackground
