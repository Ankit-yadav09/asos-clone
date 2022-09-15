import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';

const Wishlist = () => {
  const {state} = useContext(AuthContext);

  return (
    <div style={{backgroundColor:"lightgrey"}}>
      <br />
      <br />
      <h1> <b>Your Wishlist is Empty!</b> </h1>
      <br />
      {!state.isAuth?<h1>Login to Add Something</h1>:"Add Your Favourite Products "}
      
      <br />
      <br />
      {!state.isAuth?<div style={{color:"blue"}}>
     <Link to={'/login'}>Click here to Login </Link>     
  </div>:""}
      <br />
      <br />
    </div>
    
  )
}

export default Wishlist