import React, { useState } from "react";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      coordinates: response.data.coordinates,
    });
  }
  function search() {
    const apiKey = "f8833caao3caf01e1ffbc8t348acfb03";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handdleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container-fluid">
        <h1 className="">Check Your Weather</h1>

        <div className="row">
          <div className="col">
            <form id="showCity" onSubmit={handdleSubmit}>
              <input
                type="text "
                placeholder="Enter City"
                className="border border-light border border-5"
                id="city-input"
                autoFocus="on"
                onChange={handleCityChange}
              />
              <input
                type="submit"
                value="Search"
                button
                className="btn btn-outline-light ms-1"
              />
            </form>
          </div>
          <WeatherInfo data={weatherData} />
        </div>

        <div className="Footer">
          <span className="coding-link">
            Coded by Jordanka Josifovic {""}
            <a href="https://github.com/JJpink31/weather-react-app.git">
              Open-Source Code
            </a>{" "}
            and hosted on
            <a href="github.com/JJpink31/weather-react-app.">Netlify</a>
          </span>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
