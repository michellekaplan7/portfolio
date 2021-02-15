import React from "react";

//resumeData
import { resumeData } from "../../helpers/resumeData";

//resume
import resume from "../../assets/images/michelle_kaplan_resume.pdf";

const Footer = () => {
  return (
    <footer>
      <h2>© {new Date().getFullYear()} michellekaplan.dev</h2>
      <span>
        <a
          rel="noopener noreferrer"
          aria-label="github profile"
          href={resumeData.gitHubURL}
          target="_blank"
        >
          github
        </a>{" "}
        |{" "}
        <a
          rel="noopener noreferrer"
          aria-label="linkedIn profile"
          href={resumeData.linkedInURL}
          target="_blank"
        >
          linkedin
        </a>{" "}
        |{" "}
        <a
          rel="noopener noreferrer"
          aria-label="resume"
          href={resume}
          target="_blank"
        >
          resume
        </a>
      </span>
    </footer>
  );
};

export default Footer;
