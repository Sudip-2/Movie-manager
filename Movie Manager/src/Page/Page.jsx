import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Page = () => {
    const { imdbid } = useParams()
    const[movie,setMovie] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            let apikey = "8d8adf22"
            let apiUrl = `https://www.omdbapi.com/?apikey=${apikey}&i=${imdbid}`
            let data = await fetch(apiUrl)
            let response = await data.json()
            setMovie(response)
            // console.log(response)
          }
          fetchData()
    },[imdbid])

    return (
        <>
            <div className=' bg-gray-800 text-gray-300 px-2 min-h-[90svh]'>
                <div className='max-w-[1200px] mx-auto pt-[60px] pb-[20px] sm:py-[30px] h-full grid sm:grid-cols-3 gap-x-5'>

                    {/* Movie poster */}
                    <div className='w-full sm:col-span-1'>
                        <img src={movie.Poster} alt="image" className='aspect-[2/3] object-cover w-full rounded-md' />
                    </div>
                    {/* Movie poster */}

                    {/* Movie Desc */}
                    <div className='w-full mt-5 sm:mt-0 sm:col-span-2 flex flex-col justify-between gap-2'>

                        <h2 className=' px-4 font-Lato font-bold text-4xl'>{movie.Title} <span className='text-sm'>Rated ({movie.Rated})</span></h2>

                        <div className=''>
                            <h3 className='px-2'>Story</h3>
                            <p className='px-4'>{movie.Plot}</p>
                        </div>

                        <div className=''>
                            <h3 className='px-2'>Cast</h3>
                            <p className='px-4'>{movie.Actors?movie.Actors:"N/A"}</p>
                        </div>

                        <div className=''>
                            <h3 className='px-2'>Score</h3>
                            <p className='px-4'>Internet Movie Database: ''</p>
                            <p className='px-4'>Rotten Tomatoes Value: '96%'</p>
                            <p className='px-4'>Metacritic Value: '95/100'</p>
                        </div>

                        <div className=''>
                            <h3 className='px-2'>OtherInfo</h3>
                            <p className='px-4'>Released: {movie.Released}</p>
                            <p className='px-4'>Writer: {movie.Writer}</p>
                            <p className='px-4'>Director: {movie.Director}</p>
                            <p className='px-4'>imdbVotes: {movie.imdbVotes}</p>
                        </div>

                    </div>
                    {/* Movie Desc */}

                </div>

            </div>
        </>
    )
}

export default Page