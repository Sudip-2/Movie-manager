import React from 'react'
import { FiMinus } from "react-icons/fi";
import { useSelector,useDispatch } from 'react-redux'
import { decrement } from '../Redux/Slices/Watchlist/watchlistSlice'

const Addbutton = ({imdbId}) => {

  const count = useSelector((state) => state.watchlist.value)
  const dispatch = useDispatch()

  return (
    <div>
      <FiMinus className='text-5xl absolute text-red-600 right-5 bottom-5 cursor-pointer backdrop-blur-lg rounded-full' 
      onClick={() => {
        dispatch(decrement(imdbId))
        // console.log(count)
      }}
      />
    </div>
  )
}

export default Addbutton