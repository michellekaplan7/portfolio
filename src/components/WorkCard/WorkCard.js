import React from "react";

//resumeData
import { resumeData } from "../../helpers/resumeData";

const WorkCard = () => {
  return (
    <div className="work">
      {resumeData.work.map((job) => {
        return (
          <div key={job.id} className="work__content">
            <div className="work__content--header">
              <div className="work__content--header-info">
                <a
                  href={job.link}
                  aria-label="company name"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <h3>{job.name}</h3>
                </a>
                <h4>{job.location}</h4>
                <h4>{job.position}</h4>
                <h4>{job.time}</h4>
              </div>
              <div>
                <img
                  className="work__content--logo"
                  src={job.logo}
                  alt="logo"
                />
              </div>
            </div>
            <div className="work__content--text">
              <ul className="work__content--text-list">
                {job.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkCard;
