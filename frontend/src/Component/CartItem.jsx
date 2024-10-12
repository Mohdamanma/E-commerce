import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from "./Asset/Frontend_Assets/cart_cross_icon.png";

function CartItem() {
  const { all_product, cartItems, getTotalCartAmount, removeToCart } = useContext(ShopContext)
  console.log("cart items :", cartItems)

  return (
    <div className='sm:my-24 sm:mx-32 my-11 mx-14'>
      <div className='hidden sm:grid grid-cols-[0.5fr,3fr,0.5fr,0.5fr,0.5fr,0.5fr] items-center py-3 gap-10 font-semibold text-xl'>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>quality</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {
        all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return <div className='grid grid-cols-[0.5fr,3fr,0.5fr,0.5fr,0.5fr,0.5fr] items-center py-3 sm:gap-10 gap-5 font-normal'>
              < img src={e.image} alt="" className='sm:h-24 h-20' />
              <p className='text-sm font-poppins'>{e.name}</p>
              <p>${e.new_price}</p>
              <button className='w-8 h-8 bg-gray-200 border-2 border-black'>{cartItems[e.id]}</button>
              <p className='ml-3'>{e.new_price * cartItems[e.id]}</p>
              <img src={remove_icon} onClick={() => removeToCart(e.id)} alt="" className='w-[15px] cursor-pointer' />
              <hr />
            </div >
          }
          return null
        })}
      <div>
      </div>

      {/* Paymentcontainer */}

      <div className='grid sm:grid-cols-2 grid-cols-1 gap-16 my-24 '>
        <div>
          <h1 className='font-medium font-[poppins] text-3xl'>Cart Totals</h1>
          <div className='my-10'>
            <div className='flex justify-between py-4 font-medium text-gray-500  border-solid border-b-2 border-gray-500'>
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>

            <div className='flex justify-between py-4 font-medium text-gray-500 border-solid border-b-2 border-gray-500'>
              <p>Shipping Fee</p>
              <p>free</p>
            </div>
            <div className='flex justify-between py-4 font-bold text-2xl '>
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>
          <button className='h-11 w-56 bg-red-500 font-bold text-white text-base '>PROCEED TO CHECKOUT</button>
        </div>

        <div>
          <p className='text-gray-500 font-normal'>if you have a promo code, Enter it here</p>
          <div className='flex mt-4  '>
            <input className='h-10 w-72 pl-4  bg-slate-200 border-none outline-none' type="text" placeholder='promo code' />
            <button className='h-10 bg-black px-5  text-white' >Submit</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default CartItem