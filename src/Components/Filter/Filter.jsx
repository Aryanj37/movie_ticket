import React from 'react'
import DropdownFilter from './Dropdown'

const Filter = () => {
    const choice=[
        {
          "title": "Languages",
          "options": ["Hindi", "English", "Bhojpuri", "Multi Language", "Tamil"],
          "onClear": "handleClear('Languages')"
        },
        {
          "title": "Genres",
          "options": [
            "Drama",
            "Action",
            "Adventure",
            "Comedy",
            "Animation",
            "Family",
            "Fantasy",
            "Historical",
            "Horror",
            "Period",
            "Romantic",
            "Sci-Fi"
          ],
          "onClear": "handleClear('Genres')"
        },
        {
          "title": "Format",
          "options": ["2D", "3D", "4DX", "4DX 3D"],
          "onClear": "handleClear('Format')"
        }
      ]
      
     

      const handleClear = (filterType) => {
        console.log(`${filterType} cleared`);
      };

  return (
    <div className="p-6 h-auto w-[400px] ml-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Filter</h1>
        <div className="max-w-md w-full">

            {choice.map((elem,idx)=>{

                return <DropdownFilter 
                key={idx} 
                title={elem.title}
                options={elem.options}

                onClear={() => handleClear(elem.title)}
                 />
            })}
        </div>
      
    </div>
  )
}

export default Filter
