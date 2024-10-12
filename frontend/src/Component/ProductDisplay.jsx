import React, { useContext } from 'react'
import star_icon from './Asset/Frontend_Assets/star_icon.png'
import star_dull_icon from './Asset/Frontend_Assets/star_dull_icon.png'
import { ShopContext } from '../Context/ShopContext'

const ProductDisplay = ({ product }) => {
  const { addToCart, cartItems } = useContext(ShopContext)

  return (
    <div className='lg:flex sm:mx-44 mx-14  gap-14 mt-7'>
      {/* LeftSide productDetails */}
      <div className='flex gap-4 '>
        <div className='flex flex-col gap-4 '>
          <img src={product.image} alt="" className='sm:h-[125px] h-[100px]' />
          <img src={product.image} alt="" className='sm:h-[125px] h-[100px]' />
          <img src={product.image} alt="" className='sm:h-[125px] h-[100px]' />
          <img src={product.image} alt="" className='sm:h-[125px] h-[100px]' />
        </div>
        <div className=''>
          <img src={product.image} alt="" className='w-[620px] sm:h-[550px] h-[450px]' />
        </div>
      </div>

      {/* RightSide productDetails */}
      <div className='flex flex-col gap-6 sm:mt-0 mt-4'>
        <h1 className='font-semibold text-2xl font-[poppins] leading-10'>{product.name}</h1>
        <div className='flex'>
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className='flex items-center gap-6'>
          <div className='text-gray-400 font-bold text-xl line-through'>
            ${product.old_price}
          </div>
          <div className='text-red-600 font-bold text-2xl'>
            ${product.new_price}
          </div>
        </div>
        <div className=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores reprehenderit molestias nemo blanditiis modi consequuntur delectus, odio incidunt eum voluptate!
        </div>
        <h1 className='font-[poppins] font-semibold text-xl text-gray-500 mt-5'>Select Size</h1>
        <div className='flex gap-4 font-medium my-4'>
          <div className='h-9 w-9 text-center border-2 border-slate-500 font-semibold text-lg '>S</div>
          <div className='h-9 w-9 text-center border-2 border-slate-500 font-semibold text-lg '>M</div>
          <div className='h-9 w-9 text-center border-2 border-slate-500 font-semibold text-lg '>L</div>
          <div className='h-9 w-9 text-center border-2 border-slate-500 font-semibold text-lg '>XL</div>
          <div className='h-9 w-9 text-center border-2 border-slate-500 font-semibold text-lg '>XXL</div>
        </div>
        <div className='flex justify-center text-white font-semibold h-11 w-52 bg-red-500 '>
          <button onClick={() => addToCart(product.id)} className='border-none outline-none cursor-pointer'>
            ADD TO CART
          </button>
        </div>
        <p><span className='font-bold'>Category :</span>Women  , T-shirt,CropTop</p>
        <p><span className='font-bold'>Tags :</span>Modern , Latest</p>
      </div>
    </div >

  )
}

export default ProductDisplay
