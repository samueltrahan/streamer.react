import React, {useState} from 'react'
import {STREAMERS} from '../constants'

export default function DropdownElements({handleStreamerSubmit}) {

  

  return (
    <div>
      {STREAMERS.map(streamer => (
        <span className="item">{streamer}</span>
      ))}
    </div>
  )
}
