import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState([]);

  useEffect(() => {
    setLoaded(false);
  }, [props.forecast]);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function load() {
    let city = props.forecast.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=f8833caao3caf01e1ffbc8t348acfb03&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="col-6">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}
