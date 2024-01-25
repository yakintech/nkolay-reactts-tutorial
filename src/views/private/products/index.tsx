import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Create from './Create'
import Detail from './Detail'
import List from './List'
import Edit from './Edit'

function Products() {
  return (<>
    <Routes>
        <Route path="/" element={<List/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/:id' element={<Detail/>} />
        <Route path='/edit/:id' element={<Edit/>} />
    </Routes>
  </>
  )
}

export default Products