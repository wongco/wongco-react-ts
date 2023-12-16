import AOS from "aos";
import { useEffect } from "react";
import styled from "styled-components";
import preview from "../../../pics/profile_pic1c.jpg";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  containerStyles: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: {
      default: "30px 0",
      "@media (max-width: 767.98px)": "0",
    },
  },
  boxStyles: {
    display: "flex",
    justifyContent: "center",
    width: {
      default: "50%",
      "@media (max-width: 767.98px)": "75%",
    },
    padding: {
      default: "0em 1em",
      "@media (max-width: 767.98px)": "1em",
    },
    margin: {
      default: "20px 0",
      "@media (max-width: 767.98px)": "0",
    },
  },
  aboutHeaderStyles: {
    padding: "0",
    margin: "0",
    textAlign: "center",
    color: "black",
    fontSize: {
      default: "3vw",
      "@media (max-width: 767.98px)": "2.1em",
    },
    fontWeight: 300,
    lineHeight: {
      default: "1.5em",
      "@media (max-width: 767.98px)": "1.25em",
    },
  },
});

const StyledAboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 767.98px) {
    flex-direction: column;
  }
`;

const StyledImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18.5em;
  width: 18.5em;
  padding: 5em;
  overflow: hidden;

  @media (max-width: 767.98px) {
    padding: 0;
  }
`;

const StyledImg = styled.img`
  border-radius: 50%;
  border: 5px solid white;
  transform: rotate(-2deg);
  object-fit: contain;

  width: auto;
  height: 250px;
  box-shadow: 5px 5px 18px gray;

  @media (max-width: 767.98px) {
  }
`;

const StyledBody = styled.div`
  color: #45474c;
  font-size: 1.75vw;
  line-height: 1.75em;
  width: 50%;
  font-weight: 300;
  padding: 0;

  @media (max-width: 767.98px) {
    padding: 1em 0;
    font-size: 5vw;
    line-height: 1.5em;
    width: 70vw;
  }
`;

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 400,
    });
  }, []);

  return (
    <section {...stylex.props(styles.containerStyles)} id="about">
      <div {...stylex.props(styles.boxStyles)}>
        <p {...stylex.props(styles.aboutHeaderStyles)}>
          Behind every problem is an elegant solution waiting to be created.
        </p>
      </div>
      <StyledAboutContainer>
        <StyledImgContainer
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
        >
          <StyledImg src={preview} alt="headshot" />
        </StyledImgContainer>
        <StyledBody>
          {`I'm a software engineer currently based in San Francisco. Prior to this, I was a Systems
          Administrator building technology solutions to solve critical business challenges. You can
          now find me tackling new challenges as a full stack software engineer coding primarily in
          JavaScript and Python.`}
          <br />
          <br />
          {`You can also find me shooting photos and eating my way through the San Francisco Bay Area.
          Interested in connecting with me professionally? Reach out to me on any of my contact
          links.`}
        </StyledBody>
      </StyledAboutContainer>
    </section>
  );
}
