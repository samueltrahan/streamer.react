import React from 'react'
import {STREAMERS} from '../constants'

export default function DropdownElements() {
  return (
    <div>
      {STREAMERS.map(streamer => (
        <div className="item">{streamer}</div>
      ))}
    </div>
  )
}
