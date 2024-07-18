import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"

function Sidebar() {

const navigate = useNavigate();

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[25%] rounded flex flex-col justify-around">
      <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-12" src={logo} alt="" />
         
        </div>


        <div onClick={()=>navigate('/SpotifyCloneJustForPractice')} className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      <div className="h-[85%] bg-[#121212] rounded">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded gap-1 pl-4 flex items-start justify-start flex-col font-semibold">
          <h1>Create your first playlist</h1>
          <p className="font-light">it's easy we will help you</p>
          <button className="bg-white text-black p-1.5 px-4  rounded-full mt-4 text-[15px]">
            Create Playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded gap-1 pl-4 flex items-start justify-start flex-col font-semibold mt-4">
          <h1>Lets's find some podcasts to follow</h1>
          <p className="font-light">we'll keep you update on new episodes</p>
          <button className="bg-white text-black p-1.5 px-4  rounded-full mt-4 text-[15px]">
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
