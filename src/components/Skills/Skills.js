import React from "react";

//resumeData
import { resumeData } from "../../helpers/resumeData";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__content">
        {resumeData.techSkills.map((skill) => {
          return (
            <div className="skills__content--item">
              <h4>{skill.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
