import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

//projectData
import { projectData } from "../../helpers/projectData";

import Scroll from "react-scroll";
const Element = Scroll.Element;

const projectCards = projectData.map((project, i) => {
  const skillsList = project.techUsed.map((skill, i) => {
    return <div key={`Skill-${i}`}>{skill}</div>;
  });
  return (
    <ProjectCard
      key={`Project-${i}`}
      name={project.name}
      image={project.image}
      repoURL={project.repoURL}
      liveLink={project.liveLink}
      description={project.description}
      altText={project.name}
      liveButtonText={project.liveButtonText}
      skills={skillsList}
    />
  );
});

const Projects = () => {
  return (
    <Element name="projects">
      <section id="projects" className="projects">
        <h2 className="section-heading">{"< Projects />"}</h2>
        <div className="projects__cards">{projectCards}</div>
      </section>
    </Element>
  );
};

export default Projects;
