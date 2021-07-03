import React from "react";
import { useState } from 'react';

function Search(props) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={props.handleSearchText}
      />
    </div>
  );
}

export default Search;
