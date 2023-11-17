// GifSearch.js
import React, { useState } from "react";

const GifSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Invoke the onSearch prop with the query
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search Gifs:
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default GifSearch;
