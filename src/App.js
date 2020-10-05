import React, { useState } from "react";
import NavBar from "./components/NavBar";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [tweets, setTweets] = useState([]);

  return (
    <>
      <NavBar />
    </>
  );
};

export default App;
