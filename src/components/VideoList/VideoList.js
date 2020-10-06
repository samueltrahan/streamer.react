import React from 'react'

export default function VideoList({videos}) {
  if (!videos) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${videos.id.videoId}`

  return (
    <div>
      <div className="ui embed">
        <iframe title="video-player" src={videoSrc}></iframe>
      </div>
      <div className="ui segment">
  <h4 className="ui header">{videos.snippet.title}</h4>
      </div>
    </div>
  )
}
