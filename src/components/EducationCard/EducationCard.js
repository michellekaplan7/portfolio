import React from "react";

//resumeData
import { resumeData } from "../../helpers/resumeData";

const EducationCard = () => {
  return (
    <div className="education">
      {resumeData.education.map((ed) => {
        return (
          <div key={ed.id} className="education__content">
            <a
              href={ed.link}
              rel="noopener noreferrer"
              aria-label="logo"
              target="_blank"
            >
              <img
                className="education__content--logo"
                src={ed.logo}
                alt="logo"
              />
            </a>
            <div className="education__content--text">
              <h3>{ed.school}</h3>
              <h4>{ed.location}</h4>
              <h4>{ed.time}</h4>
              <h4>{ed.major}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EducationCard;
