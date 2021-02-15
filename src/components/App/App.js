import "./App.scss";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import useWindowSize from "../../hooks/useWindowSize";

const App = () => {
  const size = useWindowSize();
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />

      {size.width <= 600 && <HamburgerMenu />}
    </div>
  );
};

export default App;
