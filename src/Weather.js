import React, { useState } from 'react';
import axios from 'axios';

function Weather() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
      )
      .then((response) => {
        setWeatherData(response.data);
        setError(null);
      })
      .catch((error) => {
        setWeatherData(null);
        setError(error.response?.data?.message || 'An error occurred.');
      });
  };

  return (
    <div className="flex-[0.2] flex-col items-center">
      <h3 className=" font-bold my-6 text-green-600">
        Check the weather in case you find an outdoor hobby
      </h3>
      <form onSubmit={handleFormSubmit} className="flex items-center">
        <input
          id="location"
          type="text"
          value={location}
          onChange={handleInputChange}
          placeholder="Enter City"
          className="border border-gray-400 rounded px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          Search
        </button>
      </form>

      {error && (
        <div className="text-red-500 mt-6">
          <p>Error: {error}</p>
        </div>
      )}

      {weatherData && (
        <div className="mt-6 p-6 border border-gray-400 rounded">
          <h2 className="text-2xl font-bold">{weatherData.name}</h2>
          <p className="text-xl">
            Temperature: {weatherData.main.temp} &#8457;
          </p>
          <p className="text-xl">Feels like: {weatherData.main.feels_like} &#8457;</p>
          <p className="text-xl">Humidity: {weatherData.main.humidity}%</p>
          <p className="text-xl">Wind speed: {weatherData.wind.speed} mph</p>
          <p className="text-xl">Weather: {weatherData.weather[0].main}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
