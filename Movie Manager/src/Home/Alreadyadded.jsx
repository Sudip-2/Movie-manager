import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Alreadyadded = ({ imdbId,bottom }) => {

  const imdbArray = useSelector((state) => state.watchlist.value)
  let disableAdd = imdbArray.includes(imdbId)

  return (
    <p 
    className={`absolute text-red-500 bg-slate-900 left-2 bottom-${bottom} backdrop-blur-lg px-2 text-sm rounded-full py-1 ${disableAdd?"block":"hidden"}`} 
    >Added</p> 
  )
}

export default Alreadyadded