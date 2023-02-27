import React from 'react'
import { useState } from 'react';



const Weather = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const searchWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=6aa81836672ce428bf23d5475356d104`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      }).catch(error => {
        setWeather(null);
        setErrorMessage(`Error: ${error.response.data.message}`);
      });;
     
  };

  return (
   <>
      
    <div className="App-header">
        <h1 className='head'>Weather App</h1>

        <div>
          <input className='search'
            type="text"
            placeholder="Enter City name"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className='btn btn-primary' id='search' onClick={searchWeather}>Search</button>
          {errorMessage && <div>{errorMessage}</div>}
        </div>

        {typeof weather.main !== "undefined" ? (
          <div>
          
            <p>Weather details of city:{weather.name}</p>

            <p> Current Temperture {weather.main.temp}°C</p>
            <p>Temperture Range :{weather.main.temp_min}°C to {weather.main.temp_max}°C </p>
            <p>Humidity:{weather.main.humidity}</p>
            <p>Sea Level:{weather.coord.lon}</p>
            <p>Ground Level:{weather.coord.lat}</p>
        
          </div>
        ) : (
          ""
        )}
      </div>
  </>
  
  )
}

export default Weather
