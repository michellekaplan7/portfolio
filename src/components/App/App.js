import "./App.scss";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import useWindowSize from "../../hooks/useWindowSize";

const App = () => {
  const size = useWindowSize();
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Experience />
      <Projects />

      {size.width <= 600 && <HamburgerMenu />}
    </div>
  );
};

export default App;
