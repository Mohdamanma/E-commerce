import React from 'react'
import Navbar from './Component/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Component/Footer'
import men_banner from './Component/Asset/Frontend_Assets/banner_mens.png'
import women_banner from './Component/Asset/Frontend_Assets/banner_women.png'
import kid_banner from './Component/Asset/Frontend_Assets/banner_kids.png'
import Cart from './Pages/Cart'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category="men" banner={men_banner} />} />
          <Route path='/womens' element={<ShopCategory category="women" banner={women_banner} />} />
          <Route path='/kids' element={<ShopCategory category="kid" banner={kid_banner} />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/card' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App