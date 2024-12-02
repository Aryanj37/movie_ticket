import React, { createContext } from 'react'
import bhool_bhulia3 from '../Components/assets/bhool_bhulia.jpg'
import Kal_Ho_Naa_Ho from '../Components/assets/Kal_Ho_Naa_Ho.jpg'
import Kanguva from '../Components/assets/Kanguva.jpg'
import The_Sabarmati from '../Components/assets/The_Sabarmati.jpg'
import The_Wild_Robot from '../Components/assets/The_Wild_Robot.jpg'
import Venom from '../Components/assets/Venom.jpg'
 
 export const MovieDataContext=createContext()

const LocalMovieStorage = (props) => {
    const movies = [
        {
          "movieName": "Bhool Bhulaiyaa3",
          "rating": "⭐ 6.1/10",
          "votes": "177.1K Votes",
          "cinemaChain": "UA",
          "language": "Hindi",
          "poster": bhool_bhulia3
        },
        {
          "movieName": "Kal Ho Naa Ho",
          "rating": "⭐ 6.5/10",
          "votes": "98.5K Votes",
          "cinemaChain": "UA",
          "language": "Hindi",
          "poster": Kal_Ho_Naa_Ho
        },
        {
          "movieName": "Kanguva",
          "rating": "⭐ 6.5/10",
          "votes": "98.5K Votes",
          "cinemaChain": "UA",
          "language": "Tamil, Hindi, Telugu, Kannada",
          "poster": Kanguva
        },
        {
          "movieName": "The Sabarmati",
          "rating": "⭐ 8.3/10",
          "votes": "12.5k Votes",
          "cinemaChain": "UA",
          "language": "Hindi",
          "poster": The_Sabarmati
        },
        {
          "movieName": "The Wild Robot",
          "rating": "⭐ 9.4/10",
          "votes": "14.4k Votes",
          "cinemaChain": "U",
          "language": "English, Hindi",
          "poster": The_Wild_Robot
        },
        {
          "movieName": "Venom",
          "rating": "⭐ 8/10",
          "votes": "589.2K Votes",
          "cinemaChain": "UA",
          "language": "English, Telugu, Hindi, Tamil",
          "poster": Venom
        }
      ];
      
  return (
    <div>

        <MovieDataContext.Provider value={movies}>
             {props.children}
             {/* means App (Now app is child of this) in use of props u can use {children in top} */}
        </MovieDataContext.Provider>
    </div>
  )
}

export default LocalMovieStorage
