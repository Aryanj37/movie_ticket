import React, { useContext } from 'react'
import MovieCard from './MovieCard'
import { MovieDataContext } from '../../../../../Utils/LocalMovieStorage'

const MovieList = () => {
    const movies = useContext(MovieDataContext)
    console.log(movies)

    return (
        <div className='w-full flex flex-wrap gap-10 pl-10'>
            {movies.map((elem, idx) => (
                <MovieCard 
                key={idx}
                movieName={elem.movieName}
                rating={elem.rating}
                poster={elem.poster}
                cinemaChain={elem.cinemaChain}
                language={elem.language}
                votes={elem.votes}
                />
            ))}
        </div>
    )
}

export default MovieList
