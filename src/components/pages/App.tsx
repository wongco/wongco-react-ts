import "aos/dist/aos.css";
import styled from "styled-components";
import About from "../sections/About";
import Banner from "../sections/Banner";
import Contact from "../sections/Contact";
import Navbar from "../sections/Navbar";
import Portfolio from "../sections/Portfolio";

const StyledApp = styled.div`
  background: linear-gradient(to bottom, white, #ffb900);
`;

export default function App() {
  return (
    <StyledApp id="top">
      <Navbar />
      <Banner />
      <Portfolio />
      <About />
      <Contact />
    </StyledApp>
  );
}
