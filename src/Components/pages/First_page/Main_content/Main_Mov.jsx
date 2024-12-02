import React from 'react'
import Page_title from './PAge_title'
import Section_Title from './Section_Title'
import MovieList from './All_Movies/MovieList'

const Main_Mov = () => {
  return (
    <div>
       <div className='h-[500px] w-[60%] absolute top-[200px] right-[10%]'>
        <Page_title/>
        <Section_Title/>
        <MovieList/>
    </div>
    </div>
  )
}

export default Main_Mov
