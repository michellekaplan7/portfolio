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
                <h3>{job.name}</h3>
                <h4>{job.location}</h4>
                <h4>{job.position}</h4>
                <h4>{job.time}</h4>
              </div>
              <div>
                <a
                  href={job.link}
                  rel="noopener noreferrer"
                  aria-label="logo"
                  target="_blank"
                >
                  <img
                    className="work__content--logo"
                    src={job.logo}
                    alt="logo"
                  />
                </a>
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
