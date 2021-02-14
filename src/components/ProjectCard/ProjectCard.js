import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="project">
      <div className="project__content">
        <div className="project__content--image">
          <div className="project__content--image--cover-overlay"></div>
          <img
            src={props.image}
            alt={props.name}
            className="project__content--image--screenshot"
          />
        </div>
        <div className="project__content--text">
          <h3 className="project__content--text--project-name">{props.name}</h3>
          <div className="project__content--text--links">
            <a href={props.repoURL} target="_blank" rel="noreferrer">
              Github
            </a>

            <span>
              {" "}
              |{" "}
              <a href={props.liveLink} target="_blank" rel="noreferrer">
                {props.liveButtonText}
              </a>
            </span>
          </div>
          <p className="project__content--description">{props.description}</p>
        </div>
        <div className="project__content--skillsList">
          <div className="project__content--skillsList-skill">
            {props.skills}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
