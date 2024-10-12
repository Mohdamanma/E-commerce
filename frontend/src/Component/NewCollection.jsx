import React from 'react'
import new_collection from './Asset/Frontend_Assets/new_collections'
import Item from './Item'
function NewCollection() {
  return (
    <div className='flex flex-col items-center mb-14'>
      <h2 className='font-[poppins] text-4xl font-semibold'>NEW COLLECTIONS</h2>
      <hr className='w-48 h-1 mt-2 rounded-md bg-slate-800' />
      <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-12 mt-12'>
        {new_collection.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default NewCollection