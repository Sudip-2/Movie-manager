import React, { useState } from 'react'
import { IoIosAdd } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../Redux/Slices/Watchlist/watchlistSlice'

const Addbutton = ({ imdbId,bottom }) => {

  const imdbArray = useSelector((state) => state.watchlist.value)
  let disableAdd = imdbArray.includes(imdbId)
  const dispatch = useDispatch()

  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment(imdbId))
        }}
        disabled={disableAdd}
      >
        <IoIosAdd className={`text-5xl absolute text-red-600 right-5 bottom-${bottom} cursor-pointer backdrop-blur-lg rounded-full`}
        />
      </button>
    </div>
  )
}

export default Addbutton