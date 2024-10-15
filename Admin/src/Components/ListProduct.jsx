import React, { useEffect, useState } from 'react'
import cross_icon from '../assets/cross_icon.png'

const ListProduct = () => {
  const [allproduct, setAllproduct] = useState([])

  const fetchData = async () => {
    await fetch('http://localhost:4000/allproduct')
      .then((res) => res.json())
      .then((data) => {
        console.log("All product ", data)
        setAllproduct(data)
      })
  }
  console.log(allproduct)

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div>
      <h1>All Product List</h1>
      <div className='flex justify-evenly'>
        <hr />
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div>
        <hr />
        {allproduct.map((product, index) => {
          return <div key={index}>
            <img src={product.image} alt="" />
            <p>{product.name}</p>
            <p>{product.old_price}</p>
            <p>{product.new_price}</p>
            <p>{product.category}</p>
            <img src={cross_icon} alt="" />
          </div>
        })}

      </div>
    </div >
  )
}

export default ListProduct
