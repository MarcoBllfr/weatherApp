import React from "react";
import './secondCity.css'


const secondCity = ({nome}) => {
    return (
      
        
<div
  class="block max-w-[18rem] rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface">
  <div class="p-6">
    <h5
      class="mb-2 text-xl font-medium leading-tight">
      {nome}
    </h5>
    <p class="mb-4 text-base">
      With supporting text below as a natural lead-in to additional
      content.
    </p>
    <button
      type="button"
      href="#"
      class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
      data-twe-ripple-init
      data-twe-ripple-color="light">
      Go somewhere
    </button>
  </div>



</div>
)
}

export default secondCity;