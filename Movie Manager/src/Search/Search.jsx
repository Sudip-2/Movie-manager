import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Homediv from '../Home/Homediv';
import { TailSpin } from 'react-loader-spinner'

const Search = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const value = queryParams.get('title');
  let [arrayLength, setArraylength] = useState(0)
  const [isLoading, setIsloading] = useState(true)

  let [content, setContent] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      let apikey = import.meta.env.VITE_Apikey
      let apiUrl = `https://www.omdbapi.com/?apikey=${apikey}&s=${value}&plot=full`

      try{
        let data = await fetch(apiUrl)
        let response = await data.json()
        let dataArray = await response.Search
        setArraylength(dataArray.length)
        let titleImg = dataArray.map((item) => {
          return (
            <Homediv item={item} key={item.imdbID} />
          )
        })
        setContent(titleImg)
      }catch(error){
        setArraylength(0)
        setContent([])
      }
      setIsloading(false)
    }
    fetchData()

  }, [value])

  return (
    <>
      <div className=' bg-gray-800 text-gray-300 px-2 min-h-[90svh]'>
        <div className={`w-full min-h-[90svh] justify-center items-center ${isLoading ? " flex" : "hidden"}`}>
          <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#2563EB"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>

        <div className='max-w-[1200px] mx-auto pt-[60px] pb-[20px] sm:py-[30px] h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-8'>

          <div className={`col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 font-Lato font-bold ${isLoading ? "hidden" : "grid"}`}>
            <p>Search Results {arrayLength}</p>
          </div>

          {content}

          {/* <div className='w-full aspect-[2/3] z-[1] relative overflow-hidden'>

            <img src="https://imgs.search.brave.com/KuW3HcPR2IwH4a4ThKmnN4Y_uGBdhzY2oDHmhfdVft0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZm9udHNpbnVz/ZS5jb20vc3RhdGlj/L3VzZS1tZWRpYS1p/dGVtcy8xODQvMTgz/MDgyL3VwdG8tNzAw/eGF1dG8vNjNkZjk3/ZjcvMTAyOF9NLTAz/MTRfZm90b19kLmpw/ZWc" alt='posters' className='w-full h-full object-cover rounded-md hover:scale-110 duration-300' />

              <p className='absolute text-red-600 left-2 bottom-2 backdrop-blur-lg border px-2 text-sm rounded-full py-1' >Added</p>          

            <abbr title="Add to Your watchlist">

            </abbr>

          </div> */}


        </div>

      </div>
    </>
  )
}

export default Search