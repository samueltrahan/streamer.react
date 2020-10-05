import React, {useState} from 'react';
import DropdownElements from './DropdownElements'
import './Dropdown.css'

const Dropdown = () => {
  const [streamer, setStreamer] = useState('')

  


  return (
    <>
    <div className="ui compact menu">
  <div className="dropdown ui simple dropdown item">
    Dropdown
    <i className="dropdown icon"></i>
    <div className="menu">
     <DropdownElements />
    </div>
  </div>
</div>
    </>
  )
}

export default Dropdown;