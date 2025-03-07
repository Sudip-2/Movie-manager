import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Addbutton from '../Home/Addbutton.jsx'
import Alreadyadded from '../Home/Alreadyadded.jsx'
import Minus from '../Watchlist/Minus.jsx'
import { TailSpin } from 'react-loader-spinner'

const Page = () => {
    const { imdbid } = useParams()
    const [movie, setMovie] = useState('')
    const [ratingArr, setRatingarr] = useState([])
    const [isLoading, setIsloading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            let apikey = import.meta.env.VITE_Apikey
            let apiUrl = `https://www.omdbapi.com/?apikey=${apikey}&i=${imdbid}`
            let data = await fetch(apiUrl)
            let response = await data.json()
            setMovie(response)
            setRatingarr(response.Ratings)
            setIsloading(false)
        }
        fetchData()
    }, [imdbid])

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

                <div className={`max-w-[1200px] mx-auto pt-[60px] pb-[20px] sm:py-[30px] h-full sm:grid-cols-3 gap-x-5 ${isLoading ? "hidden" : "grid"}`}>

                    {/* Movie poster */}
                    <div className='w-full sm:col-span-1 relative'>
                        <img src={movie.Poster} alt="image" className='aspect-[2/3] object-cover w-full rounded-md' />
                        <Alreadyadded imdbId={movie.imdbID} bottom={33} />
                        <Addbutton imdbId={movie.imdbID} bottom={40} />
                        <Minus imdbId={movie.imdbID} bottom={40} />
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
                            <p className='px-4'>{movie.Actors ? movie.Actors : "N/A"}</p>
                        </div>

                        <div className=''>
                            <h3 className='px-2'>Score</h3>
                            {
                                ratingArr.map((item, index) => {
                                    return (
                                        <p className='px-4' key={index}>{item.Source}: {item.Value}</p>
                                    )
                                })
                            }
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