import { useRef } from "react";
import "./App.css";
import Videojs from "./components/videojs";

function App() {
const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: false,
    muted:true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://ik.imagekit.io/vedant224/videoplayer/test.mp4/ik-master.m3u8?tr=sr-240_360_480_720_1080",
        type: "application/x-mpegURL",
      },
    ],
    poster:"https://ik.imagekit.io/vedant224/videoplayer/test.mp4/ik-thumbnail.jpg?tr=so-5",
    tracks:[],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  return (
    <div style={{maxWidth:"800px"}}>
      <Videojs options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
}

export default App;
