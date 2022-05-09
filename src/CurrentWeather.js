import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  let icon = props.info.icon;
  let iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  let wind = props.info.wind;
  return (
    <div className="CurrentWeather">
      <img src={iconUrl} alt={props.info.despcription} id="icon" />
      <div className="temp">
        {Math.round(props.info.temperature)}
        <span>ºF</span>
      </div>
      <div className="Details">
        <ul>
          <li>Humidity: {Math.round(props.info.humidity)}%</li>
          <li>Wind: {Math.round(wind)} MPH</li>
        </ul>
      </div>
      <div className="Description">
        <div className="cityName">{props.info.city}</div>
        <div className="DayTime">
          <small>Last Updated:</small>Monday 01:57PM
        </div>
        <div>{props.info.description}</div>
      </div>
    </div>
  );
}
