import React from 'react'
import VideoItem from './VideoItem'
import './VideosDisplay.css'

export default function VideosDisplay({video, onVideoSelect}) {
  const renderedList = video.map((vid) => {
    return (
      <VideoItem vid={vid} onVideoSelect={onVideoSelect}/>
    )
  })
  return (
    <div className="ui relaced divided list">
      {renderedList}
    </div>
  )
}
