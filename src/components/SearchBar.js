import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    if (inputValue.trim()) {
      onSearch(inputValue); // Изпраща стойността към App.js
      setInputValue(''); // Изчистваме полето след търсене
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      handleSearchClick(); // Позволява търсене с Enter
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter article number"
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchBar;