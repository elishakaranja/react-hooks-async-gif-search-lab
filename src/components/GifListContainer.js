// GifListContainer.js
import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    // Fetch default gifs when the component mounts
    fetchGifs("dolphin");
  }, []);

  const fetchGifs = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=Zca5PF94S41FgJsI56kptXDHpjv1vOjQ&rating=g`)
      .then((response) => response.json())
      .then((data) => {
        setGifs(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleSearch = (query) => {
    // Call the fetchGifs function with the new search query
    fetchGifs(query);
  };

  return (
    <div>
      <GifSearch onSearch={handleSearch} />
      <GifList gifs={gifs} />
    </div>
  );
};

export default GifListContainer;
