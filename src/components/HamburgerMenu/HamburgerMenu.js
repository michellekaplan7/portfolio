import React from "react";
import Scroll from "react-scroll";

const Link = Scroll.Link;
const scrollDuration = 600;

const HamburgerMenu = () => {
  const closeNav = () => {
    document.getElementById("navi-toggle").checked = false;
  };

  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label for="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link
              className="navigation__link"
              to="about"
              smooth={true}
              duration={scrollDuration}
              onClick={() => closeNav()}
            >
              About
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              className="navigation__link"
              to="projects"
              smooth={true}
              duration={scrollDuration}
              onClick={() => closeNav()}
            >
              Projects
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              className="navigation__link"
              to="experience"
              smooth={true}
              duration={scrollDuration}
              onClick={() => closeNav()}
            >
              Experience
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              className="navigation__link"
              to="contact"
              smooth={true}
              duration={scrollDuration}
              onClick={() => closeNav()}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
