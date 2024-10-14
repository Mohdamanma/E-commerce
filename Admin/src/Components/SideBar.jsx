import React from 'react'
import { Link } from 'react-router-dom'
import add_product_icon from '../assets/Product_Cart.svg'
import list_product_icon from '../assets/Product_list_icon.svg'
const SideBar = () => {
  return (
    <div className='flex sm:flex-col flex-row justify-center sm:justify-start sm:gap-8 w-full sm:max-w-64 h-auto bg-white sm:h-screen sm:pt-8 py-7 sm:py-0'>
      <Link to={'/addproduct'}>
        <div className='flex gap-8 justify-center items-center hover:bg-slate-200 sm:mx-5 m-0 cursor-pointer rounded-md py-4 px-4'>
          <img src={add_product_icon} alt="" />
          <p>Add product</p>
        </div>
      </Link>
      <Link to={'/listproduct'}>
        <div className='flex gap-8 justify-center items-center hover:bg-slate-200 sm:mx-5 m-0 cursor-pointer rounded-md py-4 px-4'>
          <img src={list_product_icon} alt="" />
          <p>Product List</p>
        </div>
      </Link>
    </div >
  )
}

export default SideBar
