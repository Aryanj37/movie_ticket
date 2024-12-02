import React from 'react'

const Section_Title = () => {
  return (
    <div className="flex items-center justify-between bg-gray-50 px-6 py-4 rounded-md shadow-sm mb-7">
    {/* Left Section - Title */}
    <h2 className="text-lg font-semibold text-black">Coming Soon</h2>
  
    {/* Right Section - Button */}
    <button className="text-red-500 font-medium flex items-center hover:underline">
      Explore Upcoming Movies <span className="ml-1">&rarr;</span>
    </button>
  </div>
  
  )
}

export default Section_Title
