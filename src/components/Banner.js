import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Banner() {
    const navigate=useNavigate();

    // navigate to grid page
    const toGrid = (e)=>{
        e.preventDefault();
        navigate('grid');
    }

  return (
    <div className='relative'>
    <img className=' w-screen object-cover h-screen' src="https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg" alt="" />
    <div className='absolute top-1/2 w-full text-center'>
      <h1 className='text-4xl font-bold text-white mb-5'>Crafting Spaceborne Marvels, Beyond Imagination.</h1>
      <button onClick={toGrid} className='text-black bg-yellow-400 px-10 py-4 shadow-md rounded-full my-2 hover:shadow-xl active:scale-90 transition duration-150'><p className='font-bold'>Explore..!</p> </button>
    </div>
  </div>
  )
}
