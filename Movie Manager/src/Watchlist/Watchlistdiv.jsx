import React from 'react'
import Minus from './Minus.jsx'
import { Link } from 'react-router-dom';

const Homediv = ({item}) => {
    return (
        <>
            <div className='w-full aspect-[2/3] z-[1] relative overflow-hidden rounded-md'>
                <Link to={`/page/${item.imdbID}`}>
                    <img src={item.Poster} alt='posters' className='w-full h-full object-cover rounded-md hover:scale-110 duration-300' />
                </Link>
                <abbr title="Remove from Your watchlist">
                    <Minus imdbId={item.imdbID} bottom={2}/>
                </abbr>
            </div>
        </>
    )
}

export default Homediv