import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayot from './public/auth'
import PrivateLayout from './private'

function Views() {
    
  return (<>
    <PrivateLayout/>
  </>
  )
}

export default Views