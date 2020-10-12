import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import VideoList from './components/VideoList/VideoList'
import VideoDisplay from './components/VideosDisplay/VideosDisplay'
import Tweets from './components/Tweets/Tweets'
import SearchBar from './components/SearchBar/SearchBar'
import axios from "axios";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css'

const App = () => {
  const [video, setVideo] = useState([]);
  const [streamer, setStreamer] = useState('')
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
        setStreamer(streamer)
        setVideo(response.data.items);
        setSelectedVideo(response.data.items[0])
      })
      .catch((err) => console.log(err));
    };
    

 const onVideoSelect = (video) => {
    setSelectedVideo(video)
  }

  return (
    <Router>
      <NavBar getStreamers={getStreamers} />
      <Route exact path="/search" render={(location) => (
        <SearchBar location={location}/>
      )}>
      </Route>
      <div className="home-page">
        <div className="videos-hp">
      <VideoList video={selectedVideo}/>
      <VideoDisplay video={video} onVideoSelect={onVideoSelect}/>
        </div>
        <div className="tweets-hp">
      <Tweets streamer={streamer}/>
        </div>
      </div>
    </Router>
  );
};

export default App;
