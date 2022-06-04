import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../Products'

function RoutingComp() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<h3>Product Detail page</h3>} />
        </Routes>
    </div>
  )
}

export default RoutingComp