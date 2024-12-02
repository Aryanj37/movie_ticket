import React, { useState } from "react";

function DropdownFilter(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded mb-4 bg-white w-[310px] shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center p-3 border-b border-gray-300">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`text-md font-semibold bg-transparent border-none cursor-pointer ${isOpen ? "text-red-500" : "text-black"}`}
        >
          {isOpen ? "▴" : "▾"} {props.title}
        </button>
        <button onClick={props.onClear} className="text-sm bg-transparent border-none text-gray-500 cursor-pointer hover:text-red-500">
          Clear
        </button>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="flex flex-wrap p-2 gap-2">
          {props.options.map((option, index) => (
            <button key={index} className="p-2 border border-red-500 rounded-full bg-transparent text-red-500 text-sm font-semibold cursor-pointer hover:bg-red-500 hover:text-white transition duration-300 ease-in-out">
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownFilter;
