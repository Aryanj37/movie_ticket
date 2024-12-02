import React from 'react'
import Header from '../../others/Header'
import Tabs from './side_tabs/Tabs'
import Filter from './Filter/Filter'
import Select_Movies from './Main_content/Main_Mov'

const Main_page = () => {
  return (
    <div className='w-full bg-[#F6F6F6] h-screen'>
      <Header/>
      <Tabs/>

      <Filter/>
      <Select_Movies/>

    </div>
  )
}

export default Main_page
