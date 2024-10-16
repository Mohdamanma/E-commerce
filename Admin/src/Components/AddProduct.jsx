import React, { useState } from 'react'
import upload_area from '../assets/upload_area.svg'
const AddProduct = () => {

  const [image, setImage] = useState(false)
  const [productDetails, setProductDetails] = useState({
    name: '',
    image: '',
    category: 'women',
    old_price: '',
    new_price: '',
  })

  const changeHandler = (e) => {
    console.log("product Details are :" + productDetails.name)
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
  }

  const imageHandler = (e) => {
    console.log(e.target.files[0])
    setImage(e.target.files[0])
  }

  const AddProduct = async () => {
    // console.log(productDetails)
    let product = productDetails
    let responseData
    let formData = new FormData()
    formData.append('product', image)

    //uploadImage into Multer
    await fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: formData
    }).then((resp) => resp.json()).then((data) => { responseData = data })

    if (responseData.success) {
      product.image = responseData.image_url
      console.log("product :", product)
    }

    await fetch('http://localhost:4000/addproduct', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then((resp) => resp.json())
      .then((data) => {
        data.success ? alert("Product Added") : alert("Product not Added")
      })

  }


  return (
    <div className='flex flex-col  gap-8 sm:w-full sm:max-w-[800px] w-auto sm:my-5 sm:mx-7 m-5 bg-white shadow-lg sm:px-12 sm:pt-10 p-8'>
      <div className='w-full '>
        <p>Product title</p>
        <input type="text" value={productDetails.name} onChange={changeHandler} className='w-full mt-4 h-12 border-2 border-gray-300 border-solid py-3 pl-3 rounded outline-none font-[Poppins] text-base' name='name' placeholder='Type here' />
      </div>
      <div className='flex gap-4'>
        <div className='flex-1'>
          <p>Price</p>
          <input type="text" value={productDetails.old_price} onChange={changeHandler} className='w-full mt-4 h-12 border-2 border-gray-300 border-solid py-3 pl-3 rounded outline-none font-[Poppins] text-base' name='old_price' placeholder='Type here' />
        </div>
        <div className='flex-1'>
          <p>Office Price</p>
          <input type="text" value={productDetails.new_price} onChange={changeHandler} className='w-full mt-4 h-12 border-2 border-gray-300 border-solid py-3 pl-3 rounded outline-none font-[Poppins] text-base' name='new_price' placeholder='Type here' />
        </div>
      </div>
      <div>
        <p>Product Category</p>
        <select name="category" value={productDetails.category} onChange={changeHandler} className='p-3 mt-4 h-12 border-2 border-gray-300 border-solid rounded ' >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kids</option>
        </select>
      </div>
      <div className='h-32 w-32 rounded-xl object-contain '>
        <label htmlFor="file-input">
          <img src={image ? URL.createObjectURL(image) : upload_area} alt="" />
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
      </div>
      <button onClick={() => AddProduct()} className='max-w-36 rounded-md text-white bg-blue-500 h-12'>ADD</button>
    </div >
  )
}

export default AddProduct
