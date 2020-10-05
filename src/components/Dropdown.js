import React, {useState} from 'react';
import DropdownElements from './DropElements'
import './Dropdown.css'

const Dropdown = ({setStreamer}) => {
 


 
  
 


  return (
    <>
    <div className="ui compact menu">
  <div className="dropdown ui simple dropdown item">
    Dropdown
    <i className="dropdown icon"></i>
    <div className="menu">
     <DropdownElements  setStreamer={setStreamer}/>
    </div>
  </div>
</div>
    </>
  )
}

export default Dropdown;