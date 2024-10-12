import React from 'react'
import Item from './Item'
import data_product from './Asset/Frontend_Assets/data'
function Popular() {
    return (
        <div className='flex flex-col items-center mb-28'>
            <h1 className='font-[poppins] text-4xl md:font-semibold font-medium '>POPULAR IN WOMENS</h1>
            <hr className='w-48 h-1 mt-2 rounded-md bg-slate-800' />
            <div className='mt-12 grid md:grid-cols-4 sm:grid-cols-2  gap-5'>
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
                })}
            </div>

        </div>
    )
}

export default Popular