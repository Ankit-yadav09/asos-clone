import React from 'react'
import Menubar from '../../Components/Menubar'
import WBrands from './WBrands'
import WMiddle from './WMiddle'
import WSale from './WSale'

const Women = () => {
  return (
    <div>
        <Menubar/>
        <WSale/>
        <WMiddle/>
        <WBrands/>
    </div>
  )
}

export default Women