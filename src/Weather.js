import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState(null);
  let [weatherInfo, setWeatherInfo] = useState({
    temperature: 100,
    icon: "50d",
    humidity: 100,
    wind: 50,
    description: "whats happening?",
    dt: 1000000000,
    city: "Xanadu",
  });
  const apiKey = "bcdada43905d3c2d7aa9f45a7ce30f8b";
  let units = "imperial";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  function handleResponse(response) {
    setWeatherInfo({
      temperature: response.data.main.temp,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      dt: response.data.dt,
      city: response.data.name,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios.get(apiUrl).then(handleResponse);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <div className="weatherSearch">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            autoComplete="off"
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="btn btn-primary" />
        </form>
      </div>
      <CurrentWeather info={weatherInfo} />
    </div>
  );
}
