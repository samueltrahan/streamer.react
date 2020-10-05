import React, { useState } from "react";
import NavBar from "./components/NavBar";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [tweets, setTweets] = useState([]);
  const [streamer, setStreamer] = useState('')

  console.log(streamer)

  return (
    <>
      <NavBar setStreamer={setStreamer}/>
    </>
  );
};

export default App;
