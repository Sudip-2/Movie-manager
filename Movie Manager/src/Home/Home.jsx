import React, { useEffect, useState } from 'react'
import Homediv from './Homediv.jsx';

const Home = () => {
  let [content, setContent] = useState([])
  let [page,setPage] = useState(1)

  const fetchData = async () => {
    let apikey = import.meta.env.VITE_Apikey
    let apiUrl = `https://www.omdbapi.com/?apikey=${apikey}&s=movie&y=2024&plot=full&page=${page}`

    let data = await fetch(apiUrl)
    let response = await data.json()
    let dataArray = await response.Search
    if(response.totalResults != content.length){
      setContent((prev) => [...prev,...dataArray])
    }
    console.log(content)
  }

  const handleScroll = () => {
    // scrollheight : gives height of our application
    // scrolltop : gives how much we scrolled from the top
    // innerheight : size of the window 
    // so when we are at the last part of application scrolltop+innerheight = scrollheight
    if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
      setPage((prev) => prev+1)
    }
  }

  useEffect(() => {
      fetchData()
  },[page])

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  }, [])

  return (
    <>
      <div className=' bg-gray-800 text-gray-300 px-2 min-h-[90svh]'>

        <div
          className='max-w-[1200px] mx-auto pt-[60px] pb-[20px] sm:py-[30px] h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-8'
         >

          {content.map((item) => {
            return (
              <Homediv item={item} key={item.imdbID} />
            )
          })}

        </div>

        {/* <div className='w-full aspect-[2/3] z-[1] relative overflow-hidden'>

            <img src="https://imgs.search.brave.com/KuW3HcPR2IwH4a4ThKmnN4Y_uGBdhzY2oDHmhfdVft0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZm9udHNpbnVz/ZS5jb20vc3RhdGlj/L3VzZS1tZWRpYS1p/dGVtcy8xODQvMTgz/MDgyL3VwdG8tNzAw/eGF1dG8vNjNkZjk3/ZjcvMTAyOF9NLTAz/MTRfZm90b19kLmpw/ZWc" alt='posters' className='w-full h-full object-cover rounded-md hover:scale-110 duration-300' />

              <p className='absolute text-red-600 left-2 bottom-2 backdrop-blur-lg border px-2 text-sm rounded-full py-1' >Added</p>          

            <abbr title="Add to Your watchlist">
              <Addbutton />
            </abbr>

          </div> */}

      </div>
    </>
  )
}

export default Home