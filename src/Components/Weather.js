import React, { useState, useEffect } from 'react';
import Store from './StorePrevdata';

const Weather = ({ search }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [store, setStore] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bf898a297f528a676b67ea1b6b20d41b`);
        console.log(response);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        console.log(data);
        setWeatherData(data);

        setStore(prev => [...prev, data]);

      } catch (error) {
        setError(error.message);
      }
    };

    if (search) {
      fetchData();
    }
  }, [search]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <br />
      <div className="container">
        <h1 className="my-4 text-center">
          Weather for {search}
        </h1>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-bg-primary border-primary">
                <h4 className="my-0 fw-normal">Temperature</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  {weatherData.main.temp} <span>&#8451;</span>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Min Temperature: {weatherData.main.temp_min}&#8451;</li>
                  <li>Max Temperature: {weatherData.main.temp_max}&#8451;</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-bg-primary border-primary">
                <h4 className="my-0 fw-normal">Humidity</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  {weatherData.main.humidity}% Humidity
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</li>
                  <li>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-bg-primary border-primary">
                <h4 className="my-0 fw-normal">Wind</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  {weatherData.wind.speed} km/hr
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Wind Degrees: {weatherData.wind.deg}</li>
                  <li>Feels Like: {weatherData.main.feels_like}&#8451;</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Store storeData={store} />
    </>
  );
};

export default Weather;
