import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperture from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <button className="btn btn-outline-light mt-2">Current Location</button>
      <div className="grid">
        <div className="row">
          <div className="col-3">
            <div className="main-city">
              <div>{props.data.city}</div>
              <div className="d-flex weather-temp"></div>
              <WeatherTemperture fahrenheit={props.data.temperature} />

              <div className="main-city-description">
                <ul>
                  <li>
                    <FormattedDate date={props.data.date} />
                  </li>
                </ul>
                <ul>
                  <li>
                    Humidity:{""}
                    {Math.round(props.data.humidity)}
                  </li>
                  <li>
                    Wind: {""}
                    {Math.round(props.data.wind)}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="main-emoji col-3">
            <img src={props.data.icon} alt={props.data.description} />
          </div>
        </div>
      </div>
    </div>
  );
}
