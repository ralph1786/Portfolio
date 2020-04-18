import React from "react";
import { v4 as uuidv4 } from "uuid";
import GitHub from "../assets/icons/github-icon.svg";
import YouTube from "../assets/icons/youtube-3.svg";
import "./ModalContent.scss";

function ModalContent({ project, closeModal }) {
  const {
    name,
    demo,
    github,
    description,
    frontendTech,
    backendTech,
  } = project;

  const frontend = frontendTech.map((tech) => <li key={uuidv4()}>{tech}</li>);
  const backend = backendTech.map((tech) => <li key={uuidv4()}>{tech}</li>);

  return (
    <div className="modal-container">
      <h2>{name}</h2>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <div className="modal-container-frontend-list">
        <h4>Frontend Technologies</h4>
        <ul>{frontend}</ul>
      </div>
      <div className="modal-container-backend-list">
        <h4>Backend Technologies</h4>
        <ul>{backend}</ul>
      </div>
      <div className="modal-container-icons">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <img src={GitHub} alt="icon for social media GitHub" />
        </a>
        <a href={demo} target="_blank" rel="noopener noreferrer">
          <img src={YouTube} alt="icon for social media YouTube" />
        </a>
      </div>
      <div className="modal-container-close-button">
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default ModalContent;
