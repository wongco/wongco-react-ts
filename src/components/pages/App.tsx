import "aos/dist/aos.css";
import * as stylex from "@stylexjs/stylex";

import About from "../sections/About";
import Banner from "../sections/Banner";
import Contact from "../sections/Contact";
import Navbar from "../sections/Navbar";
import Portfolio from "../sections/Portfolio";

const skipNavStyles = stylex.create({
  skipNav: {
    position: "absolute",
    top: "-40px",
    left: "0",
    backgroundColor: "#0066CC",
    color: "white",
    padding: "8px 16px",
    zIndex: 1000,
    textDecoration: "none",
    fontSize: "14px",
  },
});

const styles = stylex.create({
  app: {
    backgroundImage: "linear-gradient(to bottom, white, #ffb900)",
  },
});

export default function App() {
  return (
    <div {...stylex.props(styles.app)} id="top">
      <a
        href="#main-content"
        {...stylex.props(skipNavStyles.skipNav)}
        className="skip-nav-link"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Banner />
        <Portfolio />
        <About />
      </main>
      <Contact />
    </div>
  );
}
