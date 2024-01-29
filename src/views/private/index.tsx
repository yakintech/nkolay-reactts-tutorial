import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Products from './products'
import Dashboard from './dashboard'
import Suppliers from './suppliers'
import Header from './components/Header'

function PrivateLayout() {
  return (<>

    <Header/>

    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/products/*" element={<Products />} />
      <Route path='/suppliers/*' element={<Suppliers />} />
    </Routes>

    <footer>2024</footer>

  </>
  )
}

export default PrivateLayout