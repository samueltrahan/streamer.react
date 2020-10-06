import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import VideoList from './components/VideoList/VideoList'
import VideoDisplay from './components/VideosDisplay/VideosDisplay'
import axios from "axios";
import './App.css'

const App = () => {
  const [video, setVideo] = useState([]);
  const [tweets, setTweets] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null)

  const getStreamers = (event, streamer) => {
    event.preventDefault();
    axios
      .get("/api/videos", {
        params: {
          streamer: streamer,
        },
      })
      .then((response) => {
        console.log(response.data.items)
        setVideo(response.data.items);
        setSelectedVideo(response.data.items[0])
      })
      .catch((err) => console.log(err));
  };

 const onVideoSelect = (video) => {
    setSelectedVideo(video)
  }

  return (
    <>
      <NavBar getStreamers={getStreamers} />
      <VideoList video={selectedVideo}/>
      <VideoDisplay video={video} onVideoSelect={onVideoSelect}/>
    </>
  );
};

export default App;
