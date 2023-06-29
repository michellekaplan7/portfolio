import React from "react";
import Scroll from "react-scroll";

import Particle from "../Particle/Particle";

//resumeData
import { resumeData } from "../../helpers/resumeData";

//icons
import linkedIn from "../../assets/images/linkedin-icon.svg";
import gitHub from "../../assets/images/github-icon.svg";
import resumeIcon from "../../assets/images/resume-icon.svg";

//resume
import resume from "../../assets/images/michelle-kaplan-resume-june-2023.pdf";

const Link = Scroll.Link;
const Element = Scroll.Element;
const scrollDuration = 600;

const Header = () => {
  return (
    <Element name="header">
      <header>
        <Particle />
        <div className="scale-in-center welcome" id="name-container">
          <h1 className="first-name">Michelle</h1>
          <h1 className="last-name">Kaplan</h1>
        </div>
        <div className="scale-in-center-second welcome" id="industry-container">
          <h2 className="sub-heading">Software Engineer</h2>
        </div>
        <div className="social-icons-container">
          <a
            rel="noopener noreferrer"
            aria-label="github profile"
            href={resumeData.gitHubURL}
            target="_blank"
          >
            <img alt="Github icon" src={gitHub} className="social-icon" />
          </a>

          <a
            rel="noopener noreferrer"
            aria-label="linkedIn profile"
            href={resumeData.linkedInURL}
            target="_blank"
          >
            <img alt="LinkedIn icon" src={linkedIn} className="social-icon" />
          </a>

          <a
            rel="noopener noreferrer"
            aria-label="resume"
            href={resume}
            target="_blank"
          >
            <img alt="Resume" src={resumeIcon} className="social-icon" />
          </a>
        </div>

        <div className="down-arrow-container">
          <Link to="about" smooth={true} duration={scrollDuration}>
            <button aria-label="scroll down" className="down-arrow"></button>
          </Link>
        </div>
      </header>
    </Element>
  );
};

export default Header;
