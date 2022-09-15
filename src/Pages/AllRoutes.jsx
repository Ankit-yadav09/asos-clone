import React from 'react'
import { Routes, Route } from "react-router-dom";
import PrivateRoute from '../Components/PrivateRoute';
import Cart from './Cart';
import Home from './Home';
import Login from './Login';
import SignIn from './SignIn';
import Wishlist from './Wishlist';
import Women from './WomensPage/Women';

const Allroutes = () => {
  return (
    
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/asos-clone' element={<Home/>}/>
            <Route path='/women' element={<Women/>}/>
            <Route path='/cart' element={
              <PrivateRoute>
              <Cart/>
              </PrivateRoute>
              }/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
        </Routes>
   
  )
}

export default Allroutes