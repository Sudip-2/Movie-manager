import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/' className='text-2xl sm:text-3xl font-Lato font-extrabold text-red-600'>Movie Manager</Link>
  )
}

export default Logo