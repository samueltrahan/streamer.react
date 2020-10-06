import React, {useState} from 'react';
import DropdownElements from './DropElements'
import './Dropdown.css'

const Dropdown = ({getStreamers}) => {
 

  return (
    <>
    <div className="ui compact menu">
  <div className="dropdown ui simple dropdown item">
    Streamers
    <i className="dropdown icon"></i>
    <div className="menu">
     <DropdownElements  getStreamers={getStreamers}/>
    </div>
  </div>
</div>
    </>
  )
}

export default Dropdown;