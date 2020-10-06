import React from 'react';
import Dropdown from './Dropdown'
import './NavBar.css'

const NavBar = ({getStreamers}) => {
  return (
    <>
    <nav className="navbar">
      <div className="nav-wrapper">
      <a href="/" className="brand-logo center"><img className="streamer-logo" src="/images/streamer.png"></img></a>
      <ul className="right hide-on-med-and-down">
        <Dropdown getStreamers={getStreamers}/>
      </ul>
      </div>
    </nav>
    </>
  )
}

export default NavBar;