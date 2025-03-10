import React from 'react';

const InputField = ({ articleNumber, handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Enter article number"
        value={articleNumber}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default InputField;
