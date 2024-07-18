import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
 
function Navbar() {
const navigate = useNavigate();


  return (
    <>
      <div className="flex items-center justify-between w-full font-semibold">
        <div className="flex items-center gap-2">
          <img onClick={()=>navigate(-1)}
            className="w-8 p-2 bg-black cursor-pointer rounded-2xl"
            src={assets.arrow_left}
            alt=""
          />
          <img onClick={()=>navigate(1)}
            className="w-8 p-2 bg-black cursor-pointer rounded-2xl"
            src={assets.arrow_right}
            alt=""
          />
        </div>

        <div className="flex items-center gap-4">
          <img className="w-10 md:hidden" src={logo} alt=""/>
          <p className="text-black bg-white md:text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Education Purpose only
          </p>
          <p className="bg-black text-white text-[10px] py-1 px-3 rounded-2xl md:text-[15px] cursor-pointer">
            Just for Practice
          </p>
          <p className="flex items-center justify-center text-white bg-green-800 rounded-full cursor-pointer w-7 h-7">
            S
          </p>
        </div>
      </div>



<div className="flex items-center gap-2 mt-4">
    <p className="px-4 py-1 text-black bg-white cursor-pointer rounded-2xl">All</p>
    <p className="px-4 py-1 text-white bg-black cursor-pointer rounded-2xl">Music</p>
    <p className="px-4 py-1 text-white bg-black cursor-pointer rounded-2xl">Podcasts</p>
</div>

    </>
  );
}

export default Navbar;
