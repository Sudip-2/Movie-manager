import { useState } from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Header/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {

  return (
    <>
     <Navbar/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
