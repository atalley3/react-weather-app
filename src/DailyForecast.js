import React from "react";
import "./DailyForecast.css";

export default function DailyForecast(props) {
  let day = props.day;
  let icon = "50d";
  let iconAlt = "Ash";
  let iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <div className="DailyForecast">
      <div className="day">{day}</div>
      <div>
        <img src={iconUrl} alt={iconAlt} />
      </div>
      <div className="temp">0ºF / 150ºF</div>
    </div>
  );
}
