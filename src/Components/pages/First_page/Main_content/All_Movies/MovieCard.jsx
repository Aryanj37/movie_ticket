import React from 'react'

const MovieCard = (props) => {
  
  return (
    <div className="w-[240px] text-black rounded-lg shadow-md overflow-hidden">
      <img
        src={props.poster} 
        className="w-[240px] h-[360px]"
      />
      <div className="flex justify-between text-sm text-white bg-black h-8">
          <span>{props.rating}</span>
          <span>{props.votes}</span>
        </div>
      
        <h2 className="text-xl font-bold mb-2 mt-3">{props.movieName}</h2>
        <div className="flex flex-col text-sm text-gray-500 space-y-1">
          <span>{props.cinemaChain}</span>
          <span>{props.language}</span>


        </div>
      
    </div>
  );
}

export default MovieCard
