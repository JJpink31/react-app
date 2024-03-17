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
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    return days[day];
  }

  return (
    <div className="WeatherForecast">
      <img
        src={props.data.condition.icon_url}
        alt={props.data.description}
        className="emoji"
      />
      <div className="col-2 p-2">
        <div className="weather-forecast-date text-decoration-underline">
          {day()}
        </div>
        <div className="weather-forecast-temperatures p-1">
          <span className="weather-forecast-temperature-max ">{maxTemp()}</span>
          <span className="weather-forecast-temperature-min mb-4">
            {minTemp()}
          </span>
        </div>
      </div>
    </div>
  );
}
