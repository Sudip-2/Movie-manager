import React from 'react'
import Logo from './Logo.jsx'
import Searchbox from './Searchbox.jsx'
import Addtolist from './Addtolist.jsx'
const Navbar = () => {
  return (
    <div className=' bg-gray-900 px-2 sticky top-0 z-[2]'>
    <div className='max-w-[1200px] flex justify-between mx-auto py-4 items-center'>
        <Logo/>
        <Searchbox/>
        <Addtolist/>
    </div>
    </div>
  )
}

export default Navbar