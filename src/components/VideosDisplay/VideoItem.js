import React from 'react'
import './VideoItem.css'

export default function VideoItem({vid, onVideoSelect}) {
  return (
    <div onClick={() => onVideoSelect(vid)} className="video-item item">
      <img alt={vid.snippet.title} className="ui image" src={vid.snippet.thumbnails.high.url}></img>
      
    </div>
  )
}
