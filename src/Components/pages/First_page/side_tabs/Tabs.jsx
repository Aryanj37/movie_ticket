import React, { useState } from 'react'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Now Showing');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const styles = {
    activeTab: {
      backgroundColor: 'white',
      border: '2px solid #E7F1F8',
    }
  };

  return (
    <div className=' flex justify-end pr-4 pt-5'>
    
    <div className='bg-[#E7F1F8] h-[50px] w-[290px] rounded-md flex justify-center gap-1 '>
      <button 
       onClick={() => handleTabClick("Now Showing")}
       style={activeTab === "Now Showing" ? styles.activeTab : {}}
     
      className='border-none rounded-md bg-[#E7F1F8] p-3 pr-6 pl-6 w-[150px]' >
        Now Showing
      </button>

      <button 
       onClick={() => handleTabClick("Coming")}
       style={activeTab === "Coming" ? styles.activeTab :{}}
     
      className='border-none rounded-md bg-[#E7F1F8] p-3 pr-6 pl-6 w-[130px]'>
        Coming
      </button>
    </div>
    </div>
  )
}

export default Tabs
