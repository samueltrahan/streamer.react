import React from 'react'

export default function VideoList({video}) {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div>
      <div className="ui embed">
        <iframe title="video-player" src={videoSrc}></iframe>
      </div>
      <div className="ui segment">
  <h4 className="ui header">{video.snippet.title}</h4>
      </div>
    </div>
  )
}
