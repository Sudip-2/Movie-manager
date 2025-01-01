import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Homediv from '../Home/Homediv'

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

          {saved.map((item) => {
            return (
              <Homediv item={item} key={item.imdbID}/>
              // {/* <p className='text-center mt-2 w-full break-words'>{item.Title}</p> */ }
            )
          })
          }

        </div>
      </div>
    </>
  )
}

export default Watchlist