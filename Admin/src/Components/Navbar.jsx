import React from 'react'
import navlogo from '../assets/nav-logo.svg'
import navprofile from '../assets/nav-profile.svg'

function Navbar() {
  return (
    <div className='flex justify-between items-center sm:py-4 sm:px-14 py-3 px-7 shadow-xl bg-white'>
      <img src={navlogo} alt="" className='sm:w-52 w-36' />
      <img src={navprofile} alt="" className='sm:w-20 w-16' />
    </div>
  )
}

export default Navbar