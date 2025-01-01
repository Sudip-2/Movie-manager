import { useState } from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Header/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import { store } from './Redux/store.js'
import { Provider } from 'react-redux'

function App() {

  return (
    <>
    <Provider store={store}>
     <Navbar/>
     <Outlet/>
     <Footer/>
    </Provider>
    </>
  )
}

export default App
