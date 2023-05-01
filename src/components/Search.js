import React from "react";
import "./Search.css";

function Search() {
  return (
    <div className="search-area">
      <form id="form">
        <input type="text" id="search" className="search" placeholder="Movie" />
        <button id="btn-search" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
