import React from "react";

import WorkCard from "../WorkCard/WorkCard";
import EducationCard from "../EducationCard/EducationCard";
import Skills from "../Skills/Skills";

import Scroll from "react-scroll";
const Element = Scroll.Element;

const Experience = () => {
  return (
    <Element name="experience">
      <section className="experience">
        <h2 className="section-heading">{"< Experience />"}</h2>
        <div className="experience__content">
          <div className="experience__content--work">
            <h3 className="experience__content--subheading">Work</h3>
            <WorkCard />
          </div>

          <div className="experience__content--education">
            <h3 className="experience__content--subheading">Education</h3>
            <EducationCard />
          </div>

          <div className="experience__content--skills">
            <h3 className="experience__content--subheading">Skills</h3>
            <Skills />
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Experience;
