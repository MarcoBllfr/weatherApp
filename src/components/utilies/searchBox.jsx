import React, { useState } from "react";

const SearchBox = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onInputChange(value);
  };

  return (
    <div className="flex space-x-2">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Inserisci il nome della città"
        className="px-4 py-2 border rounded"
      />
    </div>
  );
};

export default SearchBox;