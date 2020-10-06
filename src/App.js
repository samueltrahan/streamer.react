import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import VideoList from './components/VideoList/VideoList'
import axios from "axios";
import './App.css'

const App = () => {
  const [video, setVideo] = useState([]);
  const [tweets, setTweets] = useState([]);
  const [streamer, setStreamer] = useState("");

  const getStreamers = (event, streamer) => {
    event.preventDefault();
    axios
      .get("/api/videos", {
        params: {
          streamer: streamer,
        },
      })
      .then((response) => {
        setVideo(response.data.items);
      })
      .catch((err) => console.log(err));
  };

  

  return (
    <>
      <NavBar getStreamers={getStreamers} />
      {/* <VideoList video={video}/> */}
    </>
  );
};

export default App;
