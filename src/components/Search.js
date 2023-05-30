import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import DropdownMenu from './DropdownMenu';
export default function Search() {
  return (
    
      <div className="flex flex-col  items-center pt-5 ">
      <h1 className='text-yellow-400 text-2xl mb-5 lg:text-4xl font-semibold font-serif'>Search For your Needs!</h1>
      <div className='flex space-x-2  items-center bg-white p-4 rounded-lg'>
        <input
          type="text"
          className="border-none outline-none"
          placeholder="Enter your text"
        />
        <SearchIcon className='text-gray-400 cursor-pointer hover:text-yellow-400'/>
        
        <DropdownMenu className="z-50 cursor-pointer hover:text-yellow-400"/>
      </div>
      </div>
  
   
  )
}
