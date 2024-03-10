import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Washington",
    temperature: 33,
    date: "Saturday 5:00",
    imgUrll: " https://openweathermap.org/img/wn/10d@2x.png",
  };
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
                <strong>{weatherData.temperature}</strong>
                <span className="degrees">
                  <span id="f-temp">℉</span>
                </span>
              </div>

              <div>{weatherData.date}</div>
            </div>
          </div>

          <div className="main-emoji col-3">
            <img
              src={weatherData.imgUrll}
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
}
