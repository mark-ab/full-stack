import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './pages/Header/Header'
import Footer from './pages/Footer/Footer'



function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout