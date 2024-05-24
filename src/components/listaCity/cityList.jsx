import React from "react";
import SecondCity from "./secondCity";
import './secondCity.css'

const CityList = ({ lista, itsList, onClick }) => {
  return (
    <>
      {lista.map((cittadine) => {
        if (cittadine.indice !== itsList) {
          return (
            <div key={cittadine.indice} onClick={() => onClick(cittadine.indice)}>
              <SecondCity nome={cittadine.nomeCitta} />
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default CityList;