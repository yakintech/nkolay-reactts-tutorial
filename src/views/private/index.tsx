import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Products from './products'
import Dashboard from './dashboard'
import Suppliers from './suppliers'
import Header from './components/Header'
import Favorites from './favorites'
import Cart from './cart'

function PrivateLayout() {
  return (<>

    <Header/>

    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/products/*" element={<Products />} />
      <Route path='/suppliers/*' element={<Suppliers />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>

    <footer>2024</footer>

  </>
  )
}

export default PrivateLayout