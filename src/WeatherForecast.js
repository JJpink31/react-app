import React from "react";

export default function WeatherForecast() {
  return (
    <div className="col-6">
      <div className="weather-forecast" id="forecast"></div>
      <img src="" alt="" width="" />
      <span className="weather-forecast-temperatures">
        <span className="weather-forecast-temperature-max">°</span>
        <span className="weather-forecast-temperature-min">°</span>
        <span className="weather-forecast-date"></span>
      </span>
    </div>
  );
}
