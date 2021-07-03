import React from "react";

function Search({ setSearchText }) {
  function handleSearchText(e) {
    setSearchText(e.target.value)
  }
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearchText}
      />
    </div>
  );
}

export default Search;
