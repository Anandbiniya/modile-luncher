import React from "react";
import video from "./Images/sec12_video.mp4";

function Video() {
  return (
    // Videos link
    <div>
      <video autoPlay muted loop src={video}></video>
    </div>
  );
}

export default Video;
