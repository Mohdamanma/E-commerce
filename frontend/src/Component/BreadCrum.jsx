import React from 'react'
import arrow_icon from './Asset/Frontend_Assets/breadcrum_arrow.png'

function BreadCrum({ product }) {



  return (
    <div className='flex items-center gap-4 sm:ml-44 my-2 ml-4 sm:my-7'>
      HOME <img src={arrow_icon} className='h-[15px] ' alt="" />SHOP < img className='h-[15px]'
        src={arrow_icon} alt="" /> {product.category} < img className='h-[15px]' src={arrow_icon} alt="" /> {product.name}
    </div >
  )
}

export default BreadCrum