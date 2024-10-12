import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Component/Item'
import dropdown_Icon from '../Component/Asset/Frontend_Assets/dropdown_icon.png'

function ShopCategory({category,banner}) {
  const {all_product} = useContext(ShopContext)
  console.log("All product are :",all_product)
  
  const filteredProduct = all_product.filter((item) => item.category === category)
  
  console.log("Filtered Category are :",filteredProduct)

  return (
    <div className='px-14'>
      <img src={banner} alt="" />
      <div className='flex justify-between items-center py-10'>
        <p><span className='font-semibold'>Showing 1-12</span> out of 36 products</p>
        <div className='flex border-2 gap-1 border-solid border-slate-800 rounded-full cursor-pointer py-2 px-2'>
          Sort by <img className='object-contain' src={dropdown_Icon} alt="" height={1} width={15} />
        </div>
      </div>
      <div className='grid sm:grid-cols-4 grid-cols-1 gap-12 '>
            {filteredProduct.map((item,i) =>{
               return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
            })}
        </div>
        <div className='flex justify-center items-center cursor-pointer my-32 mx-auto w-36 h-10 bg-slate-200 text-blue-950 font-medium rounded-full'>
          Explore More
        </div>
    </div>
  )
}

export default ShopCategory