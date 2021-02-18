// images
import findMyMarketImg from "../assets/images/projects/find-my-market.png";
import vradImg from "../assets/images/projects/vacation-rentals-around-denver.png";
import mkPortfolioImg from "../assets/images/projects/michelle-kaplan-portfolio.png";

export const projectData = [
  {
    id: 1,
    className: "vrad",
    name: "Vacation Rentals Around Denver",
    image: vradImg,
    techUsed: [
      "JavaScript",
      "React",
      "React Router",
      "propTypes",
      "React Testing Library",
      "Jest",
      "CSS",
      "Fetch API",
    ],
    description:
      "A vacation rentals website that shows the user areas and listings around Denver. Learned how to handle promises, nested fetch API requests, dynamic routing, wrote unit, integration and asynchronous functionality tests. This was a paired project completed at the Turing School of Software & Design.",
    repoURL:
      "https://github.com/michellekaplan7/vacation-rentals-around-denver",
    liveButtonText: "Visit",
    liveLink: "https://vacation-rentals-around-denver.herokuapp.com/",
  },
  {
    id: 2,
    className: "find_my_market",
    name: "Find My Market",
    image: findMyMarketImg,
    techUsed: [
      "JavaScript",
      "React Native",
      "React Native Maps",
      "React Hooks",
      "React Testing Library",
      "Expo",
    ],
    description:
      "A mobile-first (IOS) geolocation app that helps users find farmers markets within 50 miles of their current location. A user can view market information, search for markets by city and state, and so much more! This was a full-stack team project completed at the Turing School of Software & Design.",
    repoURL: "https://github.com/michellekaplan7/find_my_market_fe",
    liveButtonText: "Demo Video",
    liveLink: "https://www.youtube.com/watch?v=9ahhltsioBg&t=185s",
  },
  {
    id: 3,
    className: "portfolio",
    name: "Portfolio",
    image: mkPortfolioImg,
    techUsed: [
      "JavaScript",
      "React",
      "React Hooks",
      "React Scroll",
      "SASS",
      "Responsive Web Design",
    ],
    description:
      "My portfolio website featuring work experience, projects, skills, and a contact form using EmailJS. Strong focus on styling with SASS and animations, responsive web design, including conditional rendering of a hamburger menu on smaller window sizes.",
    repoURL: "https://github.com/michellekaplan7/portfolio",
    liveButtonText: "Visit",
    liveLink: "https://michellekaplan.dev",
  },
];
