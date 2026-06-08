import "aos/dist/aos.css";
import * as stylex from "@stylexjs/stylex";
import { useRef } from "react";

import { useFocusVisible } from "../../hooks/useFocusVisible";
import About from "../sections/About";
import Banner from "../sections/Banner";
import Contact from "../sections/Contact";
import Navbar from "../sections/Navbar";
import Portfolio from "../sections/Portfolio";

const skipNavBaseStyles = stylex.create({
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
  skipNavFocus: {
    top: "0",
    outline: "2px solid white",
  },
});

const styles = stylex.create({
  app: {
    backgroundImage: "linear-gradient(to bottom, white, #ffb900)",
  },
});

export default function App() {
  const skipNavRef = useRef<HTMLAnchorElement | null>(null);
  const skipNavVisible = useFocusVisible(skipNavRef);

  return (
    <div {...stylex.props(styles.app)} id="top">
      <a
        ref={skipNavRef}
        href="#main-content"
        {...stylex.props(
          skipNavBaseStyles.skipNav,
          skipNavVisible && skipNavBaseStyles.skipNavFocus,
        )}
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
