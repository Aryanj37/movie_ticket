import React from 'react'
import Header from '../others/Header'
import Tabs from '../side_tabs/Tabs'
import Filter from '../Filter/Filter'

const Main_page = () => {
  return (
    <div className='w-full bg-[#F6F6F6] h-screen'>
      <Header/>
      <Tabs/>

      <Filter/>
    </div>
  )
}

export default Main_page
