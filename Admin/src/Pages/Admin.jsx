import React from 'react'
import SideBar from '../Components/SideBar'
import { Routes, Route } from 'react-router-dom'
import AddProduct from '../Components/AddProduct'
import ListProduct from '../Components/ListProduct'
function Admin() {
  return (
    <div className='flex flex-col sm:flex-row' >
      <SideBar />
      <Routes>
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/listproduct' element={<ListProduct />} />
      </Routes>
    </div >
  )
}

export default Admin