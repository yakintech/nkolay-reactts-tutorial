import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Create from './Create'
import Detail from './Detail'
import List from './List'

function Products() {
  return (<>
    <Routes>
        <Route path="/" element={<List/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/:id' element={<Detail/>} />
    </Routes>
  </>
  )
}

export default Products