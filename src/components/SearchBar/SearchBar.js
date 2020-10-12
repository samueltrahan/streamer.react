import React from "react";
import "./SearchBar.css";


export default function SearchBar() {
  return (
   <>
<div className="search-bar">
        <div className="ui form">
          <div>
            <form
              className="field"
       
            >
              <label>Search for a Streamer</label>
              <input
                id="input"
                className="input"
                type="text"
                placeholder="Search Streamers"
              />
              <br />
              <button className="ui button" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
