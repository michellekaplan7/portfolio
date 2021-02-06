// logos
import turingLogo from "../assets/images/turing-school-logo.png";
import csuLogo from "../assets/images/colorado-state-university-logo.jpeg";
import nannoLogo from "../assets/images/nanno-logo.png";
import cochlearLogo from "../assets/images/cochlear-americas-logo.jpg";

export const resumeData = {
  gitHubURL: "https://github.com/michellekaplan7",
  linkedInURL: "https://www.linkedin.com/in/kaplanmichelle",
  bioDescription: {
    paragraph1:
      "My name is Michelle Kaplan and I am a software engineer! Being a former marketer, I am highly empathetic to the user, understand the user journey and implement human centered design to create intuitive, meaningful user experiences. ",
    paragraph2:
      "I have a lot of experience working with cross-functional teams and utilize my strong communication skills to communicate goals and objectives across disciplines.",
    paragraph3:
      "When building an application, I am passionate about focusing on test driven development and building robust unit and integration tests. I’ve used these skills to build numerous accessible applications that use JavaScript, HTML, CSS/SASS, React, React Hooks, and more!",
    paragraph4:
      "Software engineering brings immense excitement to my life. With the vast amount of information to learn, I am continuously propelled to grow and learn.",
    paragraph5: "Let's build something together!",
  },
  education: [
    {
      id: 1,
      school: "Turing School of Software & Design",
      major: "Front End Engineering",
      time: "January 2020 - August 2020",
      location: "Denver, CO - Remote",
      logo: turingLogo,
      link: "https://turing.io/",
    },
    {
      id: 2,
      school: "Colorado State University",
      major: "B.S. Business Administration, Marketing",
      time: "August 2013 - December 2016",
      location: "Fort Collins, CO",
      logo: csuLogo,
      link: "https://www.colostate.edu/",
    },
  ],
  work: [
    {
      id: 3,
      name: "Nanno",
      location: "Denver, CO - Remote",
      logo: nannoLogo,
      link: "https://www.nanno.com/",
      position: "Software Engineer",
      time: "September 2020 - December 2020",
      description: [
        "Modernized a Rails monolithic app into a progressive web app",
        "Built a React/Redux front-end and integrated it to a new back-end",
        "Designed and implemented testing strategy for front-end components",
        "Collaborated with other team members with an agile approach",
        "Lead and participated in technical design meetings, pair programming sessions and code reviews",
        "Wrote understandable, testable code with an eye towards maintainability and scalability",
      ],
    },
    {
      id: 4,
      name: "Cochlear Americas",
      location: "Centennial, CO",
      logo: cochlearLogo,
      link: "https://www.cochlear.com/us/en/home",
      position: "Marketing Specialist",
      time: "July 2018 - October 2019",
      description: [
        "Developed paid Facebook campaigns that resulted in over $80,000 of revenue",
        "Created and implemented a newsletter strategy, aiming to increase engagement and open rates for 55,000 recipients",
        "Managed the production of recipient testimonial videos, including editing, approval, publishing, and marketing",
        "Managed the scholarship program, awarding 8 people $2,000/year, up to 4 years",
      ],
    },
    {
      id: 5,
      name: "Cochlear Americas",
      location: "Centennial, CO",
      logo: cochlearLogo,
      link: "https://www.cochlear.com/us/en/home",
      position: "Marketing Coordinator",
      time: "September 2017 - July 2018",
      description: [
        "Managed social media, newsletters and blog calendars, including writing Facebook/Twitter posts through Spreadfast",
        "Collaborated with cross-functional teams to manage the production of both print and digital assets",
      ],
    },
  ],
  techSkills: [
    {
      id: 6,
      name: "JavaScript",
    },
    {
      id: 7,
      name: "React",
    },
    {
      id: 8,
      name: "React Hooks",
    },
    {
      id: 9,
      name: "Redux",
    },
    {
      id: 10,
      name: "Fetch API",
    },
    {
      id: 11,
      name: "REST API",
    },
    {
      id: 12,
      name: "Jest",
    },
    {
      id: 13,
      name: "React Testing Library",
    },
    {
      id: 14,
      name: "Mocha",
    },
    {
      id: 15,
      name: "Chai",
    },
    {
      id: 16,
      name: "Git",
    },
    {
      id: 17,
      name: "GitHub",
    },
    {
      id: 18,
      name: "CSS3",
    },
    {
      id: 19,
      name: "SCSS",
    },
    {
      id: 20,
      name: "HTML5",
    },
    {
      id: 21,
      name: "Agile",
    },
    {
      id: 22,
      name: "jQuery",
    },
    {
      id: 23,
      name: "UX/UI",
    },
    {
      id: 24,
      name: "Responsive web design",
    },
    {
      id: 25,
      name: "Web accessibility",
    },
    {
      id: 26,
      name: "Npm / Yarn",
    },
  ],
};
