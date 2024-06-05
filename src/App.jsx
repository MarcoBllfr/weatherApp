import React, { useState,useEffect  } from 'react';
import './App.css';
import MainCity from './components/mainCity/mainCard.jsx';
import CityList from './components/listaCity/cityList.jsx';
import { useQuery } from '@tanstack/react-query';
import AddButton from './components/utilies/addButton.jsx';
import SearchBox from './components/utilies/searchBox.jsx';


const fetchWeatherData = async (cityNameSaved) => {
  const promises = cityNameSaved.map(cityName =>
    fetch(`http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_key_api}=${cityName.nomeCitta}&aqi=no`)
      .then(res => res.json())
  );
  return Promise.all(promises);
};


const App = () => {


  const [cityNameSaved, setCityNameSaved] = useState(() => {
    const savedCities = localStorage.getItem("cityNameSaved");
    return savedCities ? JSON.parse(savedCities) : [
      { nomeCitta: "Rome", indice: 0 },
      { nomeCitta: "Milan", indice: 1 },
      { nomeCitta: "London", indice: 2 }
    ];
  });

  function setAttiva(idCitta){
    setCittaAttiva(idCitta);
    }
    
    const addCitta = (cityName) => {
    
        const newCity = { nomeCitta: cityName, indice: cityNameSaved.length };
        setCityNameSaved([...cityNameSaved, newCity]);
   
    };

    useEffect(() => {
      localStorage.setItem("cityNameSaved", JSON.stringify(cityNameSaved));
    }, [cityNameSaved]);
  
    
    const [cittaAttiva, setCittaAttiva] = useState(0);
    const [newCityName, setNewCityName] = useState("");



  const { isLoading, error, data } = useQuery({
    queryKey: ['weatherData', cityNameSaved],
    queryFn: () => fetchWeatherData(cityNameSaved),
  });

  

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Errore: {error.message}</div>;

  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-2/3 p-6">
        <MainCity focusOnCity={data[cittaAttiva]} />
      </div>
      <div className="w-full md:w-1/3 p-4 flex flex-col">
        <div className="mb-4 flex justify-center">
          <AddButton onClick={addCitta} inputValue={newCityName} />
        </div>
        <div className="mb-4">
          <SearchBox onInputChange={setNewCityName} />
        </div>
        <div className="flex-grow mb-4">
          <CityList lista={cityNameSaved} itsList={cittaAttiva} onClick={setAttiva} />
        </div>
        <div className="w-full p-4">
          Localizator
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4">
       next update hourly 
      </div>
      <div className="w-full md:w-2/3 p-4">
      next update daily
      </div>
    </div>
  );
};

export default App;

