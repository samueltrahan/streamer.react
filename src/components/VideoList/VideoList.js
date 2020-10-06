import React from "react";
import './VideoList.css'

export default function VideoList({ video }) {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div>
        <iframe className="video" title="video-player" src={videoSrc}></iframe>
      </div>
      <div>
        <h4 className="video-header">{video.snippet.title}</h4>
      </div>
    </div>
  );
}
