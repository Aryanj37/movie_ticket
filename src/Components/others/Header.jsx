import React from 'react'
import logo from '../assets/Logo.png';
import { FiAlignLeft } from "react-icons/fi";

const Header = () => {
  return (
    <nav className=" flex justify-between items-center p-8 bg-white">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="absolute h-18 w-24" />
      </div>
      <div className='absolute'>
        <input type="text" placeholder="Search..." className="ml-40 p-2 bg-transparent text-black rounded-md border border-gray-300 " style={{ width: '800px' }}/>
      </div>
      <div className='mr-4'>
      <FiAlignLeft className="text-2xl" />
      </div>
    </nav>
  )
}

export default Header
