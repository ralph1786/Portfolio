import React, { Fragment } from "react";
import "./ProjectCard.scss";

function ProjectCard({ project, openModal, selectedProject }) {
  const { github, demo, image } = project;

  const showProjectDetails = (project) => {
    openModal(true);
    selectedProject(project);
  };

  return (
    <Fragment>
      <div className="project-card-container">
        <img
          src={image}
          className="project-card-container-image"
          alt="shows a still representation of the project"
        />
        <button className="project-card-container-github">
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </button>
        <button className="project-card-container-demo">
          <a href={demo} rel="noopener noreferrer">
            Demo
          </a>
        </button>
        <button
          onClick={() => showProjectDetails(project)}
          className="project-card-container-details"
        >
          Details
        </button>
      </div>
    </Fragment>
  );
}

export default ProjectCard;
