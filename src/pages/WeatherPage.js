import React, { useState } from 'react';
import axios from 'axios';
import Banner from '../components/Banner';

function WeatherPage() {
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
    <div className="relative w-full z-10 space-y-4">
     <Banner/>
        <div className="h-fit z-10 flex-col absolute bg-zinc-200 drop-shadow-lg top-[80px] rounded-lg text-black border-b border-gray-600 w-[250px]"
            style={{ left: '50%', transform: 'translateX(-50%)' }}>

         <h3 className=" text-black mx-2">Check the weather in case you find an outdoor hobby</h3>
            <div className="top-0">
                <form onSubmit={handleFormSubmit} className="flex flex-col items-center space-y-2">
                    <input 
                     id="location"
                     type="text"
                     value={location}
                     onChange={handleInputChange}
                     placeholder="Enter City"
                     className="border border-gray-400 rounded px-4 py-2 mx-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <div className="space-y-2">
                       <button
                         type="submit"
                         className=" bg-indigo-600 hover:shadow-xl text-white font-bold py-2 px-6 mb-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                        >
                           Search
                        </button>
                    </div>
                </form>
           </div>

          {error && (
            <div className="text-red-500 mt-6">
             <p>Error: {error}</p>
            </div>
           )}

            {weatherData && (
                <div className="flex flex-col items-center p-4 ">
                    <img className="top-0 left-0 w-full flex flex-col rounded-lg h-80 object-cover" src="https://images.unsplash.com/photo-1489343970971-452ba8e1548d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnJ5aW5nJTIwc3VyZmJvYXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
                    <div className="absolute w-full flex flex-col text-white text-center mx-auto">
                        <h2 className="text-2xl font-bold">{weatherData.name}</h2>
                        <p className="text-xl">Temperature: {weatherData.main.temp} &#8457;</p>
                        <p className="text-xl">Feels like: {weatherData.main.feels_like} &#8457;</p>
                        <p className="text-xl">Humidity: {weatherData.main.humidity}%</p>
                        <p className="text-xl">Wind speed: {weatherData.wind.speed} mph</p>
                        <p className="text-xl">Weather: {weatherData.weather[0].main}</p>
                    </div>

                </div>
            )}
        </div>
    </div>

  );
  
}

export default WeatherPage;
