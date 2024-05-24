import React, { useState } from 'react';
import './App.css';
import MainCity from './components/mainCity/mainCard.jsx';
import CityList from './components/listaCity/cityList.jsx';
import { useQuery } from '@tanstack/react-query';

const fetchWeatherData = async (cityNameSaved) => {
  const promises = cityNameSaved.map(cityName =>
    fetch(``)
      .then(res => res.json())
  );
  return Promise.all(promises);
};


const App = () => {
  function setAttiva(idCitta){
    setCittaAttiva(idCitta);
    }
    
  const [cityNameSaved] = useState([
    {
    nomeCitta:"Rome",
    indice:0
  },
  {
    nomeCitta:"Milan",
    indice:1
  },
  {
    nomeCitta:"London",
    indice:2
  }]);
  const [cittaAttiva, setCittaAttiva] = useState(0);



  const { isLoading, error, data } = useQuery({
    queryKey: ['weatherData', cityNameSaved],
    queryFn: () => fetchWeatherData(cityNameSaved),
  });

  

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Errore: {error.message}</div>;

  return (
    <div>
      <MainCity focusOnCity={data[cittaAttiva]} />
      <CityList lista={cityNameSaved} itsList={cittaAttiva}  onClick={setAttiva}/>
    </div>
    
  );
};

export default App;

