import React from 'react'
import { MdAddToPhotos } from "react-icons/md";
import { Link } from 'react-router-dom';

const Addtolist = () => {
  return (
    <Link to='/watchlist' className='flex items-center text-lg text-gray-300 gap-2'><span>Watchlist</span><MdAddToPhotos /></Link>
  )
}

export default Addtolist