import React from 'react'
import Navbar from '../NavBar/Navbar'
import { Outlet } from 'react-router-dom'



const Portal = () => {
  return (
    <div>
  <Navbar/>
  
  <Outlet/>
    </div>
  )
}

export default Portal