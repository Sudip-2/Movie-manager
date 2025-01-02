import React from 'react'
import { MdAddToPhotos } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Addtolist = () => {
  const movieNum = useSelector((state) => state.watchlist.value)
  return (
    <Link to='/watchlist' className='flex items-center text-lg text-gray-300 gap-2 relative'>
      <span>Watchlist</span>
      <MdAddToPhotos />
      <div className='h-[20px] w-[20px] bg-red-600 absolute rounded-full right-[-5px] bottom-[18px] flex justify-center items-center'>
        <p className='text-sm'>{movieNum.length}</p>
      </div>
    </Link>
  )
}

export default Addtolist