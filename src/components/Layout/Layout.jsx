import React from 'react'
import Navbars from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
 <>
 <Navbars />
 <Outlet />
 <Footer />
 </>
  )
}

export default Layout
