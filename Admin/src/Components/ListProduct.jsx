import React, { useEffect, useState } from 'react'
import cross_icon from '../assets/cross_icon.png'
import product from '../assets/all_product'

const ListProduct = () => {
  const [allproduct, setAllproduct] = useState([])

  const fetchData = async () => {
    await fetch('http://localhost:4000/allproduct')
      .then((res) => res.json())
      .then((data) => {
        // console.log("All product ", data)
        setAllproduct(data)
      })
  }
  console.log("All product are:", allproduct)

  useEffect(() => {
    fetchData()
  }, [])

  const remove_product = async (id) => {
    console.log("Remove product id :", id)
    await fetch('http://localhost:4000/removeproduct', {
      method: 'POST',
      headers: {
        Accept: 'applicaton/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: id })
    })

    await fetchData()
  }

  // console.log("all product are", product[0])

  return (
    <div className='flex flex-col items-center w-full rounded-md bg-white h-[740px] sm:m-7 m-5 mx-auto sm:px-10 px-5 py-5'>
      <h1 className='font-bold text-4xl font-[poppins] p-4'>All Product List</h1>
      <div className='grid grid-cols-[1fr,3fr,1fr,1fr,1fr,1fr] gap-2 w-full place-items-center py-6 sm:font-semibold  '>
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className='overflow-y-auto'>
        <hr className='w-full' />
        {allproduct.map((product, index) => {
          return <>
            <div className='grid grid-cols-[1fr,3fr,1fr,1fr,1fr,1fr] gap-2 w-full  sm:py-5 py-3 place-items-center text-sm' key={index}>
              <img src={product.image} className='sm:h-36 h-16' alt="" />
              <p>{product.name}</p>
              <p>{product.old_price}</p>
              <p>{product.new_price}</p>
              <p>{product.category}</p>
              <img className='cursor-pointer m-auto'
                src={cross_icon} onClick={() => remove_product(product.id)} alt="" />
            </div >
            <hr className='' />
          </>
        })}
      </div >
    </div>
  )
}

export default ListProduct
