import React, { useState } from "react";
import axios from "axios";
import DailyForecast from "./DailyForecast";
import "./FutureForecast.css";

export default function FutureForecast(props) {
  let lat = props.location.lat;
  let lon = props.location.lon;
  let units = props.units;
  const apiKey = props.apiKey;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=${units}`;
  let [forecast, setForecast] = useState({
    dt: "Day of Week",
    tempMax: 150,
    tempMin: 0,
    iconAlt: "Ash",
    icon: "50d",
    humidity: 100,
    wind: 50,
  });

  return (
    <div className="FutureForecast">
      <hr />
      <DailyForecast forecast={forecast} day="Mon" />
      <DailyForecast forecast={forecast} day="Tues" />
      <DailyForecast forecast={forecast} day="Wed" />
      <DailyForecast forecast={forecast} day="Thur" />
      <DailyForecast forecast={forecast} day="Fri" />
      <DailyForecast forecast={forecast} day="Sat" />
      <DailyForecast forecast={forecast} day="Sun" />
    </div>
  );
}
