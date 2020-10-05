import React, {useState} from 'react';
import DropdownElements from './DropdownElements'
import './Dropdown.css'

const Dropdown = () => {
  const [streamer, setStreamer] = useState('')


  const handleStreamerSubmit = (event, names) => {
    event.preventDefault();
    setStreamer(names)
  }
  


  return (
    <>
    <div className="ui compact menu">
  <div className="dropdown ui simple dropdown item">
    Dropdown
    <i className="dropdown icon"></i>
    <div className="menu">
     <DropdownElements handleStreamerSubmit={handleStreamerSubmit}/>
    </div>
  </div>
</div>
    </>
  )
}

export default Dropdown;