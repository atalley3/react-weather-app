import React, { useState } from "react";
import DailyForecast from "./DailyForecast";
import "./FutureForecast.css";
import axios from "axios";

export default function FutureForecast(props) {
  const [loaded, setLoaded] = useState(false); //triggers conditional rendering
  //api call info
  let units = props.units;
  let apiKey = props.apiKey;
  let lon = props.location.lon;
  let lat = props.location.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=${units}`;

  let forecast = [
    {
      dt: "Day of Week",
      tempMax: 150,
      tempMin: 0,
      iconAlt: "Ash",
      icon: "50d",
    },
  ];

  function createFutureWeatherArray(response) {
    let i = 1; //counter varible for while loop
    while (i < 8) {
      forecast.push({
        dt: response.data.daily[i].dt,
        tempMax: response.data.daily[i].temp.max,
        tempMin: response.data.daily[i].temp.min,
        iconAlt: response.data.daily[i].weather[0].main,
        icon: response.data.daily[i].weather[0].icon,
      });
    }
    setLoaded(true);
  }
  if (!loaded) {
    axios.get(apiUrl).then(createFutureWeatherArray);
    return (
      <div className="FutureForecast">
        <hr />
        <DailyForecast forecast={forecast[0]} day="Mon" />
        <DailyForecast forecast={forecast[0]} day="Tues" />
        <DailyForecast forecast={forecast[0]} day="Wed" />
        <DailyForecast forecast={forecast[0]} day="Thur" />
        <DailyForecast forecast={forecast[0]} day="Fri" />
        <DailyForecast forecast={forecast[0]} day="Sat" />
        <DailyForecast forecast={forecast[0]} day="Sun" />
      </div>
    );
  }
  if (loaded) {
    return (
      <div className="FutureForecast">
        <DailyForecast forecast={forecast[1]} day={null} />
        <DailyForecast forecast={forecast[2]} day={null} />
        <DailyForecast forecast={forecast[3]} day={null} />
        <DailyForecast forecast={forecast[4]} day={null} />
        <DailyForecast forecast={forecast[5]} day={null} />
        <DailyForecast forecast={forecast[6]} day={null} />
        <DailyForecast forecast={forecast[7]} day={null} />
      </div>
    );
  }
}
