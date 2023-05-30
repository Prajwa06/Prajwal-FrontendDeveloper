import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Search from './Search';
import GridCard from './GridCard';

export default function Grid() {
    const [data, setData] = useState([]);
    const[page,setPage]=useState(1);

    const handlePrev=(e)=>{
      e.preventDefault();
      if(page===1){
        alert("Already on First PAGE");
      }
      setPage(1);
    }

    const handleNext=(e)=>{
      e.preventDefault();
      if(page===2){
        alert("Already on LAST PAGE");
      }
      setPage(2);
    }
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Make the HTTP request to the PHP API endpoint
          const response = await axios.get('https://api.spacexdata.com/v3/capsules');
          setData(response.data);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, []);
    console.log(data);
  
  return (
    <div className='bg-[url("https://wallpaperaccess.com/full/823503.jpg")] bg-contain h-full pb-10 '>
       <Search/>

       <div className='m-5 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3'>
       {page===1 ?data.slice(0,10).map((capsule) => {
          const {capsule_id,details, status, original_launch,type , landings,capsule_serial} = capsule;
          return (
           
            <GridCard  
              id={capsule_id}
              details={details}
              status={status}
              launchDate={original_launch}
              type={type}
              landings={landings}
              serial={capsule_serial}
             />
           
            
          );
        })
        :
        data.slice(10,data.length).map((capsule) => {
          const {capsule_id,details, status, original_launch,type , landings,capsule_serial} = capsule;
          return (
           
            <GridCard  
              id={capsule_id}
              details={details}
              status={status}
              launchDate={original_launch}
              type={type}
              landings={landings}
              serial={capsule_serial}
             />
           
            
          );
        })
        }
        </div>

        <div className='flex justify-center space-x-10'>
        <button onClick={handlePrev}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Prev</button>
        <button onClick={handleNext}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</button>
</div>
    </div>
  )
}
