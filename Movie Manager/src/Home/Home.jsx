import React, { useEffect, useState } from 'react'
import { BsPlusSquareFill } from "react-icons/bs";

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
            <div className='w-full aspect-[2/3] z-[1] relative' key={item.imdbID}>

              <img src={item.Poster} alt='posters' className='w-full h-full object-cover rounded-md' />
              <abbr title="Add to Your watchlist">
                <BsPlusSquareFill className='text-5xl absolute text-red-600 right-5 bottom-5 hover:scale-110 duration-300 cursor-pointer' />
              </abbr>
            </div>
          )
        })
    setContent(titleImg)
    }
    fetchData()

  }, [])
  return (
    <>
      <div className=' bg-gray-800 text-gray-300 px-2 min-h-[90svh]'>
        <div className='max-w-[1200px] mx-auto pt-[60px] pb-[20px] sm:py-[30px] h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-8'>

          {/* movie poster size */}
          {content}

        </div>
      </div>
    </>
  )
}

export default Home