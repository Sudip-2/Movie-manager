import React from 'react'
import { FiMinus } from "react-icons/fi";
import { useSelector,useDispatch } from 'react-redux'
import { decrement } from '../Redux/Slices/Watchlist/watchlistSlice'

const Minusbutton = ({imdbId,bottom}) => {

  const imdbArray = useSelector((state) => state.watchlist.value)
  let disableAdd = imdbArray.includes(imdbId)

  const dispatch = useDispatch()

  return (
    <div>
      <FiMinus className={`text-5xl absolute text-red-600 right-3 ${disableAdd?"block":"hidden"} cursor-pointer backdrop-blur-lg rounded-full`} 
      onClick={() => {
        dispatch(decrement(imdbId))
      }}
      style={{
        bottom : bottom
      }}
      />
    </div>
  )
}

export default Minusbutton