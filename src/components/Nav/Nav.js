import React, { useState } from "react";
import Scroll from "react-scroll";
import useWindowSize from "../../hooks/useWindowSize";
import logo from "../../assets/images/mk-logo.png";

const Link = Scroll.Link;
const scrollDuration = 600;

const DesktopNav = () => {
  // eslint-disable-next-line no-unused-vars
  const [links, setLinks] = useState([
    {
      id: 1,
      name: "About",
      to: "about",
      className: "nav-container__link",
    },
    {
      id: 2,
      name: "Projects",
      to: "projects",
      className: "nav-container__link",
    },
    {
      id: 3,
      name: "Experience",
      to: "experience",
      className: "nav-container__link",
    },
    {
      id: 4,
      name: "Contact",
      to: "contact",
      className: "nav-container__link",
    },
  ]);

  return (
    <div className="nav-container">
      <nav className="nav-container__nav">
        <Link
          className="nav-container__link nav-container__link--logo"
          to="header"
          smooth={true}
          duration={scrollDuration}
        >
          <img src={logo} alt="logo" className="nav-container__logo" />
        </Link>

        {links.map((link) => {
          return (
            <Link
              activeClass="active"
              spy={true}
              key={link.id}
              to={link.to}
              smooth={true}
              duration={scrollDuration}
              className={link.className}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

const MobileNav = () => {
  return (
    <div className="nav-container">
      <nav className="nav-container__nav">
        <Link
          className="nav-container__link nav-container__link--logo"
          to="header"
          smooth={true}
          duration={scrollDuration}
        >
          <img src={logo} alt="logo" className="nav-container__logo" />
        </Link>
      </nav>
    </div>
  );
};

const Nav = () => {
  const size = useWindowSize();
  if (size.width > 600) {
    return <DesktopNav />;
  }
  return <MobileNav />;
};

export default Nav;
