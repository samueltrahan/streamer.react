import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import VideoList from './components/VideoList/VideoList'
import axios from "axios";
import './App.css'

const App = () => {
  const [videos, setVideos] = useState([]);
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
        setVideos(response.data.items);
      })
      .catch((err) => console.log(err));
  };

  

  return (
    <>
      <NavBar getStreamers={getStreamers} />
      <VideoList videos={videos}/>
    </>
  );
};

export default App;
