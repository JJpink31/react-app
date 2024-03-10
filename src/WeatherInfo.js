import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <button className="btn btn-outline-light mt-2">Current Location</button>
      <div className="grid">
        <div className="row">
          <div className="col-3">
            <div className="main-city">
              <div>{props.data.city}</div>
              <div className="d-flex weather-temp">
                <strong>{Math.round(props.data.temperature)}</strong>
                <span className="degrees">
                  <span id="f-temp">℉</span>
                </span>
              </div>

              <div>
                <FormattedDate date={props.data.date} />
              </div>
            </div>
          </div>

          <div className="main-emoji col-3">
            <img src={props.data.icon} alt={props.data.description} id="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
