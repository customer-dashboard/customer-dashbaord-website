import ReactPlayer from 'react-player';
import React, { useRef, useState } from 'react';
import {BsPlayFill} from 'react-icons/bs';
import {GiPauseButton} from 'react-icons/gi';
function PlayerComponent() {
   const playerRef = useRef();
   const [play, setPlay] = useState(false);

   const handlePlay = () => {
     if (!play) {
       setPlay(true);
     } else {
       setPlay(false);
     }
   }
   
   return (
      <div className='react-video-player-section'>
         <button className='play-pause-button' onClick={handlePlay}>{ play ? <GiPauseButton /> : <BsPlayFill /> } </button>
         <ReactPlayer ref={playerRef} url="https://mandasa1.b-cdn.net/customer-dashbaord-pro/Banner_video_first_section.mp4"  muted  playing={play} loop controls={false} width={"100%"} height={"100%"}/>
      </div>
   )
};
export default PlayerComponent;


