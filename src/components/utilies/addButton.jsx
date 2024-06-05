import React from "react";

const AddButton = ({ onClick, inputValue }) => {
  return (
    <div className="flex justify-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => onClick(inputValue)}
      >
        Aggiungi Città
      </button>
    </div>
  );
};

export default AddButton;