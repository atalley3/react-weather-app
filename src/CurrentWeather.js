import React from "react";

export default function CurrentWeather(props) {
  return (
    <div className="Current Weather">
      <img
        src="http://openweathermap.org/img/wn/10d@2x.png"
        alt="rainy"
        id="icon"
      />
      <div className="temp">
        52º<span>F</span>
      </div>
      <div className="Details">
        <ul>
          <li>Humidity: 80%</li>
          <li>Wind: 1 MPH</li>
        </ul>
      </div>
      <div className="Description">
        <div className="cityName">Asheville</div>
        <div className="DayTime">
          <small>Last Updated:</small>Monday 01:57PM
        </div>
        <div>Rainy</div>
      </div>
    </div>
  );
}
