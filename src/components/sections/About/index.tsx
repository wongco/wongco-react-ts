import AOS from "aos";
import { useEffect } from "react";
import preview from "../../../pics/profile_pic1c.jpg";
import * as stylex from "@stylexjs/stylex";

const header =
  "Behind every problem is an elegant solution waiting to be created.";

const bodyPartOne = `I'm a software engineer currently based in San Francisco. Prior to this, I was a Systems \
Administrator building technology solutions to solve critical business challenges. You can \
now find me tackling new challenges as a full stack software engineer coding primarily in \
JavaScript and Python.`;

const bodyPartTwo = `You can also find me shooting photos and eating my way through the San Francisco Bay Area. \
Interested in connecting with me professionally? Reach out to me on any of my contact links.`;

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
  aboutBodyContainerStyles: {
    display: "flex",
    flexDirection: {
      default: "row",
      "@media (max-width: 767.98px)": "column",
    },
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainerStyles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "18.5em",
    width: "18.5em",
    padding: {
      default: "5em",
      "@media (max-width: 767.98px)": "0",
    },
    overflow: "hidden",
  },
  imageStyles: {
    borderRadius: "50%",
    borderWidth: "5px",
    borderStyle: "solid",
    borderColor: "white",
    transform: "rotate(-2deg)",
    objectFit: "contain",
    width: "auto",
    height: "250px",
    boxShadow: "5px 5px 18px gray",
  },
  bodyStyles: {
    color: "#45474c",
    fontSize: {
      default: "1.75vw",
      "@media (max-width: 767.98px)": "5vw",
    },
    lineHeight: {
      default: "1.75em",
      "@media (max-width: 767.98px)": "1.5em",
    },
    width: {
      default: "50%",
      "@media (max-width: 767.98px)": "70vw",
    },
    fontWeight: 300,
    padding: {
      default: "0",
      "@media (max-width: 767.98px)": "1em 0",
    },
  },
});

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 400,
    });
  }, []);

  return (
    <section {...stylex.props(styles.containerStyles)} id="about">
      <div {...stylex.props(styles.boxStyles)}>
        <p {...stylex.props(styles.aboutHeaderStyles)}>{header}</p>
      </div>
      <div {...stylex.props(styles.aboutBodyContainerStyles)}>
        <div
          {...stylex.props(styles.imageContainerStyles)}
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
        >
          <img
            {...stylex.props(styles.imageStyles)}
            src={preview}
            alt="headshot"
          />
        </div>
        <div {...stylex.props(styles.bodyStyles)}>
          {bodyPartOne}
          <br />
          <br />
          {bodyPartTwo}
        </div>
      </div>
    </section>
  );
}
