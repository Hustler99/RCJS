import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Babyfooter from '../Babyfooter/Babyfooter'

export default function Mainlayout() {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        <Babyfooter/>

    </>
  )
}
