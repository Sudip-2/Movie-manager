import React, { useEffect, useState } from 'react'
import { BsPlusSquareFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Home = () => {
  let [content, setContent] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      let apikey = "8d8adf22"
      let apiUrl = `https://www.omdbapi.com/?apikey=${apikey}&s=movie&y=2024}`

      let data = await fetch(apiUrl)
      let response = await data.json()
      let dataArray = await response.Search
      let titleImg = dataArray.map((item) => {
          return (
            <Link to={`/page/${item.imdbID}`} key={item.imdbID}>
            <div className='w-full aspect-[2/3] z-[1] relative overflow-hidden rounded-md'>

              <img src={item.Poster} alt='posters' className='w-full h-full object-cover rounded-md hover:scale-110 duration-300' />
              <abbr title="Add to Your watchlist">
                <BsPlusSquareFill className='text-5xl absolute text-red-600 right-5 bottom-5 cursor-pointer' />
              </abbr>
            </div>
            </Link>
          )
        })
    setContent(titleImg)
    }
    fetchData()

  }, [])
  return (
    <>
      <div className=' bg-gray-800 text-gray-300 px-2 min-h-[90svh]'>
        <div className='max-w-[1200px] mx-auto pt-[60px] pb-[20px] sm:py-[30px] h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-8'>

          {/* movie poster size */}
          {content}
          {/* <div className='w-full aspect-[2/3] z-[1] relative overflow-hidden'>

              <img src="https://imgs.search.brave.com/KuW3HcPR2IwH4a4ThKmnN4Y_uGBdhzY2oDHmhfdVft0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZm9udHNpbnVz/ZS5jb20vc3RhdGlj/L3VzZS1tZWRpYS1p/dGVtcy8xODQvMTgz/MDgyL3VwdG8tNzAw/eGF1dG8vNjNkZjk3/ZjcvMTAyOF9NLTAz/MTRfZm90b19kLmpw/ZWc" alt='posters' className='w-full h-full object-cover rounded-md hover:scale-110 duration-300' />
              <abbr title="Add to Your watchlist">
                <BsPlusSquareFill className='text-5xl absolute text-red-600 right-5 bottom-5 hover:scale-110 duration-300 cursor-pointer' />
              </abbr>
            </div> */}

        </div>

      </div>
    </>
  )
}

export default Home