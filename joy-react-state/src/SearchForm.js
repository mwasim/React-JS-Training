import React, { useState } from "react";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("name");
  return (
    <>
      <form>
        <label htmlFor="search-input">Search:</label>
        <input
          type="text"
          id="search-input"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </form>
      <p>Search term: {searchTerm}</p>
    </>
  );
};

export default SearchForm;
