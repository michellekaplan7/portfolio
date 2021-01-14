import React, { useState } from "react";
import Scroll from "react-scroll";
import useWindowSize from "../../hooks/useWindowSize";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import logo from "../../assets/images/test_logo.jpg";

const Link = Scroll.Link;
const scrollDuration = 600;

const DesktopNav = () => {
  const [links, setLinks] = useState([
    {
      id: 1,
      name: "About",
      to: "about",
      className: "nav-container__link",
    },
    {
      id: 2,
      name: "Experience",
      to: "experience",
      className: "nav-container__link",
    },
    {
      id: 3,
      name: "Projects",
      to: "projects",
      className: "nav-container__link",
    },
    {
      id: 4,
      name: "Contact",
      to: "contact",
      className: "nav-container__link",
    },
  ]);

  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (id) => {
    setActiveLink(id);
  };

  return (
    <div className="nav-container">
      <nav className="nav-container__nav">
        <Link
          className="nav-container__link nav-container__link--logo"
          to="#"
          smooth={true}
          duration={scrollDuration}
        >
          <img src={logo} alt="logo" className="nav-container__logo" />
        </Link>
        {links.map((link) => {
          return (
            <Link
              key={link.id}
              onClick={() => handleClick(link.id)}
              to={link.to}
              smooth={true}
              duration={scrollDuration}
              className={
                link.className + (link.id === activeLink ? " active_link" : "")
              }
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
      <Link
        className="nav-container__link nav-container__link--logo"
        to="#"
        smooth={true}
        duration={scrollDuration}
      >
        <img src={logo} alt="logo" className="nav-container__logo" />
      </Link>
      <HamburgerMenu />
    </div>
  );
};

const Nav = () => {
  const size = useWindowSize();
  if (size.width > 640) {
    return <DesktopNav />;
  }
  return <MobileNav />;
};

export default Nav;
