import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Create from './Create'
import List from './List'

function Suppliers() {
  return (<>
  
    <Routes>
        <Route path="/" element={<List />} />
        <Route path="/create" element={<Create />} />
    </Routes>
  </>
  )
}

export default Suppliers