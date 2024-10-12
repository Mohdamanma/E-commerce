import React from 'react'
import all_product from "./Asset/Frontend_Assets/data";
import Item from './Item';

function RelatedProduct() {
  return (
    <div className='flex flex-col gap-5 items-center'>
      <h1 className='font-medium text-4xl font-[poppins]'>Related Product</h1>
      <hr className='h-1.5 w-32 bg-black rounded-lg' />
      <div className='flex flex-wrap gap-4 my-6  mx-14'>
        {all_product.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default RelatedProduct