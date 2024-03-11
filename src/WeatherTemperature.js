import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }

  if (unit === "fahrenheit") {
    return (
      <div className="d-flex weather-temp">
        <strong>{Math.round(celsius())}</strong>
        <span className="degrees">
          <span id="f-temp">
            {" "}
            °C
            <a href="/" onClick={showCelsius}>
              {" "}
              ⎸ °F{" "}
            </a>
          </span>
        </span>
      </div>
    );
  } else {
    return (
      <div className="d-flex weather-temp">
        <strong>{Math.round(props.fahrenheit)}</strong>
        <span className="degrees">
          <span id="f-temp">
            {" "}
            <a href="/" onClick={showFahrenheit}>
              °C
            </a>{" "}
            ⎸ °F{" "}
          </span>
        </span>
      </div>
    );
  }
}
