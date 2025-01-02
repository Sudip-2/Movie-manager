import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Watchlistdiv from './Watchlistdiv.jsx'

const Watchlist = () => {

  let [saved, setSaved] = useState([])
  const watchlist = useSelector((state) => state.watchlist.value)

  useEffect(() => {

    let apiKey = import.meta.env.VITE_Apikey
    const fetchData = async () => {
      let result = []
      for (let imdbId of watchlist) {
        let apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbId}`
        let data = await fetch(apiUrl)
        let content = await data.json()
        result.unshift(content)
      }
      setSaved(result)
    }

    fetchData()
  }, [watchlist])


  return (
    <>
      <div className=' bg-gray-800 text-gray-300 px-2 min-h-[90svh]'>
        <div className='max-w-[1200px] mx-auto pt-[60px] pb-[20px] sm:py-[30px] h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-8'>

          <div className={`col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 ${watchlist.length <= 0? "block":"hidden"}`}>
            <p className='font-Lato text-xl font-bold'>Your List is Empty Bro</p>
          </div>

          {saved.map((item) => {
            return (
              <Watchlistdiv item={item} key={item.imdbID}/>
            )
          })
          }

        </div>
      </div>
    </>
  )
}

export default Watchlist