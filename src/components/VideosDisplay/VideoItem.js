import React from 'react'
import './VideoItem.css'

export default function VideoItem({vid}) {
  return (
    <div>
      <img alt={vid.snippet.title} className="ui image" src={vid.snippet.thumbnails.medium.url}></img>
      <div className="content">
      <div className="header">{vid.snippet.title}</div>
      </div>
    </div>
  )
}
