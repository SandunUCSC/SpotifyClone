import React from "react";
import { assets} from "../assets/assets";
import { useContext } from "react"; 
import { PlayerContext } from "../context/PlayerContext";

function Player() {

const{track,seekBar, seekBg, playStatus, play, pause, time, previous, next,seekSong} = useContext(PlayerContext);



    return (
        <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
            <div className="items-center gap-1 md:gap-4 lg:flex">
                <img className="w-8 md:w-12" src={track.image} alt="" />
                <div>
                    <p className="hidden md:block md:text-base">{track.name}</p>
                    <p className="hidden text-xs text-gray-300 md:block">{track.desc.slice(0, 20)}</p>
                </div>
            </div>

            <div className="flex flex-col items-center gap-1 mx-auto">
                <div className="flex gap-4">
                    <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="" />
                    <img onClick={previous} className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />

{playStatus ? <img onClick={pause} className="w-4 cursor-pointer" src={assets.pause_icon} alt="" /> 
:<img onClick={play} className="w-4 cursor-pointer" src={assets.play_icon} alt="" />
}
                 
                    <img onClick={next} className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
                    <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
                </div>



                <div className="flex items-center gap-2 md:gap-5">
                    <p className="text-sm font-normal md:font-medium md:text-base">{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div ref={seekBg} onClick={seekSong} className="w-[50vw] md:w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
                        <hr ref={seekBar} className="w-0 h-1 bg-green-800 border-none rounded-full" />
                    </div>
                    <p className="text-sm font-normal md:font-medium md:text-base">{time.totalTime.minute}:{time.totalTime.second}</p>
                </div>


            </div>



<div className="items-center hidden gap-2 opacity-75 lg:flex">
<img className="w-4" src={assets.plays_icon} alt="" />
<img className="w-4" src={assets.mic_icon} alt="" />
<img className="w-4" src={assets.queue_icon} alt="" />
<img className="w-4" src={assets.speaker_icon} alt="" />
<img className="w-4" src={assets.volume_icon} alt="" />
<div className="w-20 h-1 rounded bg-slate-50 "></div>


<img className="w-4" src={assets.mini_player_icon} alt="" />
<img className="w-4" src={assets.zoom_icon} alt="" />
</div>


        </div>
    );
}

export default Player;
