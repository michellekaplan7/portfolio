import React from "react";
import profilePic from "../../assets/images/michelle_kaplan_profile_picture.jpg";

//resumeData
import { resumeData } from "../../helpers/resumeData";

import Scroll from "react-scroll";
const Element = Scroll.Element;

const About = () => {
  return (
    <Element name="about">
      <section className="about">
        <h2 className="section-heading">{"< About />"}</h2>
        <div className="about__content">
          <img
            className="about__content--picture"
            src={profilePic}
            alt="Michelle Kaplan Headshot"
          />
          <div className="about__content--text">
            <p>{resumeData.bioDescription.paragraph1}</p>
            <p>{resumeData.bioDescription.paragraph2}</p>
            <p>{resumeData.bioDescription.paragraph3}</p>
            <p>{resumeData.bioDescription.paragraph4}</p>
            <p>{resumeData.bioDescription.paragraph5}</p>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
