import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°F`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°F`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = date.getDay();

    return days[day];
  }
  return (
    <div className="col-6">
      <div className="WeatherForecast">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.description}
          className="emoji"
        />
        <span className="weather-forecast-temperatures">
          <span className="weather-forecast-temperature-max">{maxTemp()}°</span>
          <span className="weather-forecast-temperature-min">{minTemp()}°</span>
          <span className="weather-forecast-date">{day()}</span>
        </span>
      </div>
    </div>
  );
}
