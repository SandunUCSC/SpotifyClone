import React, { useContext, useRef } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";

function App() {

const {audioRef, track} = useContext(PlayerContext);
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display/>
      </div>
      <div className="sticky bottom-0 z-50 pt-4 bg-black md:pt-2 ">
      <Player />
</div>
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
}

export default App;
