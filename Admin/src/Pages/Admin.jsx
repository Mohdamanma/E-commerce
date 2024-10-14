import React from 'react'
import SideBar from '../Components/SideBar'
import { Routes, Route } from 'react-router-dom'
import AddProduct from '../Components/AddProduct'
import ListProduct from '../Components/ListProduct'
function Admin() {
  return (
    <div className='flex sm:flex-row flex-col'>
      <SideBar />
      <Routes>
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/listproduct' element={<ListProduct />} />
      </Routes>
    </div >
  )
}

export default Admin