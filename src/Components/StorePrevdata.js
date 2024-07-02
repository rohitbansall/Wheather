import React, { useState } from 'react';
import Weather from './Weather'; // Assuming Weather component is correctly imported

const Store = () => {
  // Example data (replace with actual dynamic data from API or state)
  const [weatherData, setWeatherData] = useState([
    { location: 'Shanghai', temperature: 28, maxTemperature: 33, minTemperature: 25, humidity: 60, windSpeed: 15, windDegrees: 180 },
    { location: 'Chicago', temperature: 20, maxTemperature: 25, minTemperature: 15, humidity: 70, windSpeed: 10, windDegrees: 270 },
    { location: 'Moscow', temperature: -5, maxTemperature: 0, minTemperature: -10, humidity: 50, windSpeed: 20, windDegrees: 90 },
    // Add more locations as needed
  ]);

  return (
    <>
      <h2 className="display-6 text-center mb-4">Searched Locations</h2>
      
      <div className="table-responsive">
        <table className="table text-center">
          <thead>
            <tr>
              <th style={{ width: '10%' }}>Location</th>
              <th style={{ width: '10%' }}>Temperature</th>
              <th style={{ width: '10%' }}>Max Temperature</th>
              <th style={{ width: '10%' }}>Min Temperature</th>
              <th style={{ width: '10%' }}>Humidity</th>
              <th style={{ width: '10%' }}>Wind Speed</th>
              <th style={{ width: '10%' }}>Wind Degrees</th>
            </tr>
          </thead>
          <tbody>
            {weatherData.map((data, index) => (
              <tr key={index}>
                <th scope="row" className="text-start">{data.location}</th>
                <td>{data.temperature}&#8451;</td>
                <td>{data.maxTemperature}&#8451;</td>
                <td>{data.minTemperature}&#8451;</td>
                <td>{data.humidity}%</td>
                <td>{data.windSpeed} km/hr</td>
                <td>{data.windDegrees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Render Weather component for each location */}
      {weatherData.map((data, index) => (
        <Weather
          key={index}
          value={data.location}
          temperatures={data.temperature}
          tempmin={data.minTemperature}
          tempmax={data.maxTemperature}
          humidity={data.humidity}
          wind={data.windSpeed}
          wind_degree={data.windDegrees}
        
        />
      ))}
    </>
  );
}

export default Store;
