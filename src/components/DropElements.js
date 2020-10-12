import React from 'react'
import {DROPDOWNSTREAMERS} from '../constants'

export default function DropdownElements({ getStreamers}) {
    
  
  return (
    <div>
      {DROPDOWNSTREAMERS.map(streamer => (
        <div role="button" tabIndex="0" onClick={(event) => getStreamers(event, streamer)} className="item">{streamer}</div> 
      ))}
    </div>
  )
}
