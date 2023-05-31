import React from "react";
import { useSelector } from "react-redux";
import { selectcapsule } from "../features/capsuleSlice";

export default function SinglePage() {
  const capsule = useSelector(selectcapsule);
  return (
    <div className='bg-[url("https://wallpapercave.com/dwp1x/wp11852395.jpg")] h-screen w-screen bg-cover py-5 '>
      <div className="bg-transparent flex flex-col border border-white rounded-lg mx-10 py-5  my-5">
        <h1 className="text-4xl font-bold font-serif self-center text-white m-2 ">
          {capsule.capsule_serial}{" "}
        </h1>
        <div className="grid lg:grid-cols-2 ml-2 gap-5">
          <h1 className="text-2xl font-semibold">
            <span className="text-2xl font-semibold">No. of Landings: </span>
            {capsule.landings}
          </h1>
          <p className="text-2xl font-semibold">
            Status:{" "}
            <span
              className={`${
                capsule.status === "active" ? "text-green-500" : "text-red-500"
              }`}
            >
              {capsule.status}
            </span>
          </p>
        </div>
        <p className="text-3xl font-bold font-sans text-white m-2">Details:</p>
        <p className="text-xl m-2 text-gray-300">{capsule.details}</p>
        <h1 className="text-2xl font-semibold m-2">
          <span className="text-2xl font-semibold ">Type : </span>
          {capsule.type}
        </h1>
        <h1 className="text-2xl font-semibold m-2 ">
          <span className="text-2xl font-semibold ">Launch Date : </span>
          {capsule.original_launch ? capsule.original_launch : "N/A"}
        </h1>
        <p className="text-3xl font-bold font-sans text-white m-2">Missions</p>
        {capsule.missions.length === 0 ? (
          <p className="text-3xl font-bold font-sans text-white m-2">N/A</p>
        ) : (
          capsule.missions.map((m) => (
            <div className="self-start ml-2 pb-3 border-b border-b-gray-300 w-">
              <p className="text-gray-300">NAME: {m.name}</p>
              <p className="text-gray-300">No. of Flights: {m.flight}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
