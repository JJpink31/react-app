import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      temperature: response.data.temperature.current,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container-fluid">
        <h1 className="">Check Your Weather</h1>

        <div className="row">
          <div className="col">
            <form id="showCity">
              <input
                type="text "
                placeholder="Enter City"
                class="border border-light border border-5"
                id="city-input"
              />
              <input
                type="submit"
                value="Search"
                button
                className="btn btn-outline-light ms-1"
              />
            </form>
          </div>
        </div>
        <button className="btn btn-outline-light mt-2">Current Location</button>
        <div className="grid">
          <div className="row">
            <div className="col-3">
              <div className="main-city">
                <div>{weatherData.city}</div>
                <div className="d-flex weather-temp">
                  <strong>{Math.round(weatherData.temperature)}</strong>
                  <span className="degrees">
                    <span id="f-temp">℉</span>
                  </span>
                </div>

                <div>
                  <FormattedDate date={weatherData.date} />
                </div>
              </div>
            </div>

            <div className="main-emoji col-3">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                id="icon"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="weather-forecast" id="forecast"></div>
            <img src="" alt="" width="" />
            <span className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-max">°</span>
              <span className="weather-forecast-temperature-min">°</span>
              <span className="weather-forecast-date"></span>
            </span>
          </div>
          <div>
            <div></div>
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
      </div>
    );
  } else {
    const apiKey = "f8833caao3caf01e1ffbc8t348acfb03";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&untis=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
