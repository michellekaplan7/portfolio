import React from "react";
import Particle from "../Particle/Particle";

//icons
import linkedIn from "../../assets/images/linkedin-icon.svg";
import gitHub from "../../assets/images/github-icon.svg";
import resumeIcon from "../../assets/images/resume-icon.svg";

const Header = () => {
  return (
    <header>
      <Particle />
      <div className="scale-in-center welcome" id="name-container">
        <h1 className="first-name">Michelle</h1>
        <h1>Kaplan</h1>
      </div>
      <div className="scale-in-center-second welcome" id="industry-container">
        <h4 className="sub-heading">Software Engineer</h4>
      </div>
      <div className="social-icons-container">
        <a
          rel="noopener noreferrer"
          aria-label="github profile"
          href="https://github.com/michellekaplan7"
          target="_blank"
        >
          <img alt="Github icon" src={gitHub} className="social-icon" />
        </a>

        <a
          rel="noopener noreferrer"
          aria-label="linkedIn profile"
          href="https://www.linkedin.com/in/kaplanmichelle/"
          target="_blank"
        >
          <img alt="LinkedIn icon" src={linkedIn} className="social-icon" />
        </a>

        <a
          rel="noopener noreferrer"
          aria-label="resume"
          // href
          target="_blank"
        >
          <img alt="Resume" src={resumeIcon} className="social-icon" />
        </a>
      </div>

      <div className="down-arrow-container">
        <button aria-label="scroll down" className="down-arrow"></button>
      </div>
    </header>
  );
};

export default Header;
