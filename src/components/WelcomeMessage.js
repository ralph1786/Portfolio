import React from "react";
import { message } from "../containers/helper";
import "./WelcomeMessage.scss";

function WelcomeMessage({ time }) {
  let content = message(time);
  return <div className="welcome-message">{content}</div>;
}
export default WelcomeMessage;
