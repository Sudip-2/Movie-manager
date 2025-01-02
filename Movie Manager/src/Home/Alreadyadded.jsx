import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Alreadyadded = ({ imdbId,bottom }) => {

  const imdbArray = useSelector((state) => state.watchlist.value)
  let disableAdd = imdbArray.includes(imdbId)

  return (
    <p 
    className={`absolute text-red-500 bg-slate-900 left-2 backdrop-blur-lg px-2 text-sm rounded-full py-1 ${disableAdd?"block":"hidden"}`} 
    style={{
      bottom : bottom
    }}
    >Added</p> 
  )
}

export default Alreadyadded