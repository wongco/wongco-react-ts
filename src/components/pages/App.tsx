import "aos/dist/aos.css";
import About from "../sections/About";
import Banner from "../sections/Banner";
import Contact from "../sections/Contact";
import Navbar from "../sections/Navbar";
import Portfolio from "../sections/Portfolio";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  app: {
    backgroundImage: "linear-gradient(to bottom, white, #ffb900)",
  },
});

export default function App() {
  return (
    <div {...stylex.props(styles.app)} id="top">
      <Navbar />
      <Banner />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}
