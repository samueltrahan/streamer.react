import React, {useState} from "react";
import "./SearchBar.css";


export default function SearchBar({getStreamers}) {
    const [searchTerm, setSearchTerm] = useState('')


   const onInputChange = (event) => {
    setSearchTerm(event.target.value)
   }
  
  return (
   <>
<div className="search-bar">
        <div className="ui form">
          <div>
            <form
              className="field"
              onSubmit={(event) => getStreamers(event, searchTerm)}
            >
              <label>Search for a Streamer</label>
              <input
                id="input"
                onChange={onInputChange}
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
