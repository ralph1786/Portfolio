import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./Contact.scss";
import GitHub from "../assets/icons/github-icon.svg";
import Twitter from "../assets/icons/twitter.svg";
import LinkedIn from "../assets/icons/linkedin-icon-2.svg";
import Gmail from "../assets/icons/gmail-icon.svg";
import Medium from "../assets/icons/monogram-medium.svg";

function Contact() {
  const socialMediaIcons = [
    {
      icon: GitHub,
      altText: "icon for social media GitHub",
      url: "https://github.com/ralph1786",
    },
    {
      icon: LinkedIn,
      altText: "icon for social media LinkedIn",
      url: "https://linkedin.com/in/rafaelcruz17",
    },
    {
      icon: Medium,
      altText: "icon for blog platform Medium",
      url: "https://medium.com/@ralph1786  ",
    },
    {
      icon: Twitter,
      altText: "icon for social media Twitter",
      url: "https://twitter.com/rc_coder17",
    },
    {
      icon: Gmail,
      altText: "icon for email",
      url: "mailto:ralph1786@gmail.com",
    },
  ];

  let content = socialMediaIcons.map(({ icon, altText, url }) => (
    <a key={uuidv4()} href={url} target="_blank" rel="noopener noreferrer">
      <img src={icon} alt={altText} />
    </a>
  ));

  return (
    <div className="contact">
      {content}
      <p>By Rafael Cruz</p>
    </div>
  );
}

export default Contact;
