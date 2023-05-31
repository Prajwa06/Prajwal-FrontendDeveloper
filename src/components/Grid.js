import axios from "axios";
import React, { useEffect, useState } from "react";
import GridCard from "./GridCard";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import RefreshIcon from '@mui/icons-material/Refresh';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addcapsule } from "../features/capsuleSlice";
export default function Grid() {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handlePrev = (e) => {
    e.preventDefault();
    if (page === 1) {
      alert("Already on First PAGE");
      return;
    }
    setPage(page-1);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if(data.length<(page*10)){
      alert("Already on last page");
      return;
    }
    setPage(page+1);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make the HTTP request to the PHP API endpoint
        const response = await axios.get(
          "https://api.spacexdata.com/v3/capsules"
        );
        setData(response.data);
        setOriginalData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  console.log(data);

  const handleSearch = (e) => {
    e.preventDefault();

    if(searchTerm.length===0){
      setData(originalData);
      return ;
    }
    // eslint-disable-next-line
    const newData = data.filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (
        val.capsule_serial.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return val;
      }
    });
    setData(newData);
    setSearchTerm("");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    if (searchTerm.length === 0) {
      setData(originalData);
      return;
    }
  };

  const toSinglePage=(e,capsule)=>{
   
    e.preventDefault();
    dispatch(addcapsule(capsule));
    navigate('/'+capsule.capsule_serial);
  }

  return (
    <div className='bg-[url("https://wallpaperaccess.com/full/823503.jpg")] bg-contain h-full pb-10 '>
      <div className="flex flex-col  items-center pt-5 ">
        <h1 className="text-yellow-400 text-2xl mb-5 lg:text-4xl font-semibold font-serif">
          Search For your Needs!
        </h1>
        <div className="flex space-x-2  items-center bg-white p-4 rounded-lg">
          <input
            type="text"
            className="border-none outline-none"
            placeholder="Enter your Capsule No"
            value={searchTerm}
            onChange={handleChange}
          />
          <SearchIcon
            onClick={handleSearch}
            className="text-gray-400 cursor-pointer hover:text-yellow-400"
          />

          <FilterAltIcon className="text-gray-400 cursor-pointer hover:text-yellow-400" />
          <RefreshIcon onClick={()=>setData(originalData)} className="text-gray-400 cursor-pointer hover:text-yellow-400"/>
        </div>
      </div>

      <div className="m-5 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3">
        
          { data.length===0 ?
          <div className="h-screen flex justify-center">
            <h1 className="text-4xl text-white font-bold">No results found</h1>
          </div>
          :
          data.slice((page-1)*10, page*10).map((capsule) => {
              const {
                capsule_id,
                details,
                status,
                original_launch,
                type,
                landings,
                capsule_serial,
              } = capsule;
              return (
                <GridCard 
                  id={capsule_id}
                  details={details}
                  status={status}
                  launchDate={original_launch}
                  type={type}
                  landings={landings}
                  serial={capsule_serial}
                  toSinglePage={toSinglePage}
                  capsule={capsule}
                />
              );
            })
         }
      </div>

      <div className="flex justify-center space-x-10">
        <button
          onClick={handlePrev}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
