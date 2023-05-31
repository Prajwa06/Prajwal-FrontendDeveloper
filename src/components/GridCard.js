import React from 'react'

export default function GridCard(props) {
  const{
              id,
              details,
              status,
              launchDate,
              type,
              landings,
              serial,
              toSinglePage,
              capsule,
  }=props


  
  return (
    <div className='bg-gray-200 border-gray-200 rounded-lg m-5 '>
       <div className="relative flex flex-col m-5 bg-gray-200 z-30 pt-10 pb-5">
       <h4 className="my-3 font-bold">Serial NO:  {serial}</h4>
       <h4 className="my-3 font-bold"> ID: {id}</h4>
      <p className="absolute top-2 right-2 xsm italic">Status: <span className={`${status==="active" ? "text-green-500" :"text-red-500"}`}>{status}</span></p>
      <div>
      <p className="mb-5"><span className='font-bold'>No of Landings: </span>{landings}</p>
      <p className="mb-5"><span className='font-bold'>Type: </span>{type}</p> 
      <p className="mb-5"><span className='font-bold'>Date: </span>{launchDate} </p> 
      </div>
      
      <p className="text-xs my-2 line-clamp-2"><span className='font-bold'>Details: </span>{details}</p>
      <button onClick={(e)=>toSinglePage(e,capsule)} className="p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500;
  ">Learn More</button>
     
    </div>
    </div>
  )
}
