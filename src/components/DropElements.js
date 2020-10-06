import React from 'react'
import {STREAMERS} from '../constants'

export default function DropdownElements({ getStreamers}) {
    
  
  return (
    <div>
      {STREAMERS.map(streamer => (
        <div role="button" tabIndex="0" onClick={(event) => getStreamers(event, streamer)} className="item">{streamer}</div> 
      ))}
    </div>
  )
}
