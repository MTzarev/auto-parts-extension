import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import PartDetails from './components/PartDetails';
import ErrorMessage from './components/ErrorMessage';

import './App.css'; // Ако искаш глобални стилове, можеш да добавиш основен App стил тук

const App = () => {
  const [articleNumber, setArticleNumber] = useState('');
  const [error, setError] = useState('');

  const handleSearch = (articleNumber) => {
    setArticleNumber(articleNumber);
    setError(''); // Reset errors when new search is initiated
  };

  return (
    <div className="App">
      <h1>Auto Parts Finder</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <PartDetails articleNumber={articleNumber} setError={setError} />
    </div>
  );
};

export default App;
