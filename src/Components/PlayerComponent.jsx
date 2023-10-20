import ReactPlayer from 'react-player';
import React, { useRef } from 'react';
function PlayerComponent() {
   const playerRef = useRef(null);
   return (
      <div>
         <ReactPlayer ref={playerRef} url="https://mandasa1.b-cdn.net/customer-dashbaord-pro/Banner_video_first_section.mp4" playing muted loop controls={true} width={"100%"} height={"100%"}/>
      </div>
   )
};
export default PlayerComponent;


