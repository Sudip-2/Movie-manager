import React from 'react'
import Addbutton from './Addbutton.jsx'
import { Link } from 'react-router-dom';
import Alreadyadded from './Alreadyadded.jsx'

const Homediv = ({item}) => {
    return (
        <>
            <div className='w-full aspect-[2/3] z-[1] relative overflow-hidden rounded-md'>
                <Link to={`/page/${item.imdbID}`}>
                    <img src={item.Poster} alt='posters' className='w-full h-full object-cover rounded-md hover:scale-110 duration-300' />
                </Link>
                <Alreadyadded imdbId={item.imdbID} bottom={7}/>
                <abbr title="Add to Your watchlist">
                    <Addbutton imdbId={item.imdbID} bottom={7}/>
                </abbr>
            </div>
        </>
    )
}

export default Homediv