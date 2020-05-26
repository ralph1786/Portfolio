import React from "react";
import Name from "../components/Name";
import Typewriter from "typewriter-effect";
import WelcomeMessage from "../components/WelcomeMessage";
import Weather from "../components/Weather";
import { backgroundImage } from "./helper";
import { geolocated } from "react-geolocated";
import "./Home.scss";

function Home({ coords }) {
  let time = new Date().getHours();
  let imagePath = backgroundImage(time);

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
      {coords ? (
        <div className="weather-widget">
          <Weather coords={coords} />
        </div>
      ) : null}
    </div>
  );
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true
  },
  userDecisionTimeout: 5000
})(Home);
