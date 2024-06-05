import React from "react";
import './mainCard.css'

const mainCard = ({focusOnCity}) => {
    return (
  
        <div class="relative">
        <div
          class="block rounded-lg bg-white text-white shadow-secondary-1 dark:bg-surface-dark">
          <div class="absolute top-0 p-6">
            <h5 class="mb-2 text-xl font-medium leading-tight ">
              {focusOnCity.location.name}
            </h5>
            <p class="mb-4 text-base">
              il tempo è {focusOnCity.current.condition.text}
            </p>
            <p class="text-base">
              <small>Data</small>
            </p>
          </div>
          <img
            class="rounded-lg"
            src=""
            alt="" />
        </div>
      </div>
                
       
    )
}

export default mainCard;