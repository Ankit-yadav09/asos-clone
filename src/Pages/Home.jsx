import React from 'react'
import Brands from '../Components/Brands'
import Menubar from '../Components/Menubar'
import Middle from '../Components/Middle'
import Sale from '../Components/Sale'

const Home = () => {
  return (
    <div>
        <Menubar/>
        <Sale/>
        <Middle/>
        <Brands/>
    </div>
  )
}

export default Home