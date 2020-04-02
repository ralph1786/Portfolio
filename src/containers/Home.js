import React, { useState } from "react";
import Name from "../components/Name";
import Typewriter from "typewriter-effect";
import WelcomeMessage from "../components/WelcomeMessage";
import Weather from "../components/Weather";
import { backgroundImage } from "./helper";
import "./Home.scss";

function Home() {
  const [locationPermission, setLocationPermission] = useState(null);
  let time = new Date().getHours();
  let imagePath = backgroundImage(time);

  navigator.geolocation.getCurrentPosition(position => {
    if (position) setLocationPermission(true);
  });

  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${imagePath})`, backgroundSize: "cover" }}
    >
      <div className="main-content">
        <Name />
        <div className="main-content-typewriterMessage">
          <Typewriter
            options={{
              strings: [
                "Software Developer",
                "Full-Stack Developer",
                "Frontend Developer"
              ],
              autoStart: true,
              loop: true
            }}
          />
        </div>
        <WelcomeMessage time={time} />
      </div>
      {locationPermission ? (
        <div className="weather-widget">
          <Weather />
        </div>
      ) : null}
    </div>
  );
}

export default Home;
