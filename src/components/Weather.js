import React, { useEffect, useState } from "react";
import axios from "axios";
import { weatherApiKey } from "../constants";
import { geolocated } from "react-geolocated";

function Weather({ coords }) {
  const [temperature, setTemperature] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  let latitude = coords && coords.latitude;
  let longitude = coords && coords.longitude;

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!latitude || !longitude) return;
      try {
        let response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${weatherApiKey}`
        );
        console.log(response);
        setTemperature(Math.ceil(response.data.main.temp));
        setFeelsLike(Math.ceil(response.data.main.feels_like));
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchWeatherData();
  }, [latitude, longitude]);

  let content =
    temperature === null || feelsLike === null
      ? "Loading..."
      : `Temperature: ${temperature}, Feels Like: ${feelsLike}`;
  return <div style={{ color: "white" }}>{content}</div>;
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true
  },
  userDecisionTimeout: 5000
})(Weather);
