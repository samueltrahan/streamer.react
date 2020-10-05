import React from 'react'
import {STREAMERS} from '../constants'

export default function DropdownElements({ setStreamer}) {
  
  return (
    <div>
      {STREAMERS.map(streamer => (
        <div role="button" tabIndex="0" onClick={() => setStreamer(streamer)} className="item">{streamer}</div> 
      ))}
    </div>
  )
}
