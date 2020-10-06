import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import axios from "axios";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [tweets, setTweets] = useState([]);
  const [streamer, setStreamer] = useState("");

  const getStreamers = (event, streamer) => {
    console.log(streamer)
    event.preventDefault();
    axios
      .get("/api/videos", {
        params: {
          streamer: streamer,
        },
      })
      .then((response) => {
        console.log(response.data.items);
        setVideos(response.data.items);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NavBar getStreamers={getStreamers} />
    </>
  );
};

export default App;
