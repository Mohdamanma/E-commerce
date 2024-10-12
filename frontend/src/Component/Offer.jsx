import React from 'react'
import exclusiveImage from './Asset/Frontend_Assets/exclusive_image.png'

function Offer() {
  return (
    <div className='flex m-auto sm:px-36 md:w-5/6 bg-gradient-to-t  from-violet-100 to-fuchsia-100 h-3/5 mb-36 '>
      <div className='flex-1 flex flex-col gap-5 lg:items-start py-11 items-center'>
        <h1 className='font-[poppins] lg:text-7xl text-5xl font-medium'>Exclusive</h1>
        <h1 className='font-[poppins] lg:text-7xl text-5xl font-medium mt-4'>Offer For You</h1>
        <p className='font-[poppins] font-medium text-2xl mt-3'>ONLY ON BEST SELLER PRODUCT</p>
        <button className='h-12 cursor-pointer  text-white mt-6 w-52 bg-red-500 rounded-full'>Check now</button>
      </div>
      <div className='flex-1 sm:flex hidden justify-end items-center'>
        <img src={exclusiveImage} alt="" height={200} width={300} />
      </div>
    </div>
  )
}

export default Offer