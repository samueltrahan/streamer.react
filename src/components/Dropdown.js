import React from 'react';
import './Dropdown.css'

const Dropdown = () => {
  return (
    <>
    <div className="ui compact menu">
  <div className="dropdown ui simple dropdown item">
    Dropdown
    <i className="dropdown icon"></i>
    <div className="menu">
      <div className="item">Choice 1</div>
      <div className="item">Choice 2</div>
      <div className="item">Choice 3</div>
    </div>
  </div>
</div>
    </>
  )
}

export default Dropdown;