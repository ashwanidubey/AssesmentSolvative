import React, { useState, useEffect } from 'react';
import '../css/Navbar.css';

export default function Navbar({data,setSearchData}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
     setSearchData(data.filter((item)=>item.city.includes(searchTerm)))
  };

  const handleKeyDown = (e) => {
    // Check if Ctrl + / or Cmd + / is pressed
    if ((e.key === '/' && e.ctrlKey) || (e.key === '/' && e.metaKey)) {
      e.preventDefault(); // Prevent default browser behavior (e.g., opening browser search)
      document.getElementById('searchInput').focus(); // Focus on the search input
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown); // Listen for keydown events on the document
    return () => {
      document.removeEventListener('keydown', handleKeyDown); // Clean up event listener on component unmount
    };
  }, []); 
  return (
    <div className="search-container">
      <input
        id="searchInput" // Add id to input element
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        Ctrl+/
      </button>
    </div>
  );
}
