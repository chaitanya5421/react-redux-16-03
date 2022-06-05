import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../Products/Products'
import Product from '../Products/Product'
import Cart from '../../redux/Cart/Cart'

function RoutingComp() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    </div>
  )
}

export default RoutingComp