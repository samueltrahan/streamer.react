import React from "react";
import Dropdown from "./Dropdown";
import "./NavBar.css";

const NavBar = ({ getStreamers }) => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo center">
            <img alt="" className="streamer-logo" src="/images/streamer.png"></img>
          </a>
          <ul >
            <Dropdown getStreamers={getStreamers} />
            <li className="right"><a href="/search">Search</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
