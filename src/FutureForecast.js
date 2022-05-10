import React from "react";
import DailyForecast from "./DailyForecast";
import "./FutureForecast.css";

export default function FutureForecast() {
  let forecast = {
    dt: "Day of Week",
    tempMax: 150,
    tempMin: 0,
    iconAlt: "Ash",
    icon: "50d",
  };

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
