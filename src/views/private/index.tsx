import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Products from './products'
import Dashboard from './dashboard'
import Suppliers from './suppliers'

function PrivateLayout() {
  return (<>

    <ul>
      <li><Link to='/'>Dashboard</Link></li>
      <li><Link to='/products'>Products</Link></li>
      <li><Link to='/suppliers'>Suppliers</Link> </li>
    </ul>

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