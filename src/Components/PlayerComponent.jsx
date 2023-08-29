import ReactPlayer from 'react-player';
import React, { useRef } from 'react';
// import videoPlayer from '../Assets/Videos/Banner_video_first_section.mp4'
function PlayerComponent() {
   const playerRef = useRef(null);
   return (
      <div>
         {/* <ReactPlayer ref={playerRef} url={videoPlayer} playing muted loop controls={true} width={"100%"} height={"100%"}/> */}
      </div>
   )
};
export default PlayerComponent;


