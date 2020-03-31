import React from "react";
import Name from "../components/Name";
import Typewriter from "typewriter-effect";
import WelcomeMessage from "../components/WelcomeMessage";
import { backgroundImage } from "./helper";
import "./Home.scss";

function Home() {
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
    </div>
  );
}

export default Home;
