import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import "./Weather.scss";
import { weatherApiKey } from "../constants";
import { PacmanLoader } from "react-spinners";

function Weather({ coords }) {
  const [temperature, setTemperature] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState("");
  const [description, setDescription] = useState("");
  const [minTemperature, setMinTemperature] = useState("");
  const [maxTemperature, setMaxTemperature] = useState("");
  let latitude = coords.latitude;
  let longitude = coords.longitude;
  let degreeIcon = String.fromCharCode(176);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!latitude || !longitude) return;
      try {
        let response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${weatherApiKey}`
        );
        const { main, weather } = response.data;
        setTemperature(Math.ceil(main.temp));
        setFeelsLike(Math.ceil(main.feels_like));
        setWeatherIcon(weather[0].icon);
        setDescription(weather[0].description);
        setMinTemperature(Math.ceil(main.temp_min));
        setMaxTemperature(Math.ceil(main.temp_max));
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchWeatherData();
  }, [latitude, longitude]);
  let content =
    temperature === null || feelsLike === null ? (
      <div className="loader">
        <PacmanLoader color={"#ffffff"} />
      </div>
    ) : (
      <Fragment>
        <img
          src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          alt="icon displaying current weather conditions"
        />
        <p>{description}</p>
        <span>
          {temperature}
          {degreeIcon}
          <span className="weather-widget-content-minMaxTemp">
            {maxTemperature}
            {degreeIcon}/{minTemperature}
            {degreeIcon}
          </span>
        </span>
        <span>
          Feels Like {feelsLike}
          {degreeIcon}
        </span>
      </Fragment>
    );

  return <div className="weather-widget-content">{content}</div>;
}

export default Weather;
