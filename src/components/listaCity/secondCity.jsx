import React from "react";
import './secondCity.css'


const secondCity = ({nome}) => {
    return (
      
        
      <div className="rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface border border-gray-300 my-5">
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight">
          {nome}
        </h5>
        <p className="mb-4 text-base">
          With supporting text below as a natural lead-in to additional content.
        </p>
  </div>



</div>
)
}

export default secondCity;