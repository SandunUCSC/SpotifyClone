import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";
import logo from "../assets/logo.png";
function DisplayAlbum() {
  const { id } = useParams();
  const albumData = albumsData[id];
  const {playWithId} = useContext(PlayerContext);

  return (
    <>
    <div className="py-3">
      <Navbar />
</div>
      <div className="flex flex-col gap-8 mt-10 md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumData.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="mb-4 text-5xl font-bold md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <img className="inline-block w-7" src={logo} alt="" />
            <b> Sandun Online Music Player</b> • 4,529,459 likes • <b>50 songs, </b>
            about 2 hr 30 mins
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          {" "}
          <b className="mr-4">#</b>Title
        </p>
        <p className="hidden sm:block">Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="w-4 m-auto" src={assets.clock_icon} alt="" />
      </div>

<hr />
{
  songsData.map((item,index) => (
    <div onClick={()=>playWithId(item.id)} key={index} className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
<p className="text-xs text-white md:text-base ">
<b className=" mr-2 md:mr-4 text-[#a7a7a7]">{index+1}</b>
<img className="inline w-5 mr-2 md:mr-5 md:w-10" src={item.image} alt=""/>
{item.name}
</p>

<p className="text-[15px] hidden sm:block">{albumData.name}</p>
<p className="text-[15px] hidden sm:block">5 days ago</p>
<p className="text-[12px] md:text-[15px] text-center">{item.duration}</p>

    </div>
  ))
}


    </>
  );
}

export default DisplayAlbum;
