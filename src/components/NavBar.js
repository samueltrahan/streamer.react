import React from 'react';
import './NavBar.css'

const NavBar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="nav-wrapper">
      <ul className="right hide-on-med-and-down">
        <li><a href="/">Streamer</a></li>
      </ul>
      </div>
    </nav>
    </>
  )
}

export default NavBar;