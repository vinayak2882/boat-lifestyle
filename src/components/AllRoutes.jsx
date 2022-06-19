import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from '../Pages/Cart'
import HomePage from '../Pages/HomePage'
import { Login } from '../Pages/Login'
import OfferZone from '../Pages/OfferZone'
import Product from '../Pages/Product'
import { SignUp } from '../Pages/SignUp'

const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/offerZone' element={<OfferZone/>}/>
    <Route path='/products/:id' element={<Product/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>


   </Routes>
  )
}

export default AllRoutes
