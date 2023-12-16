import ProjectInfo from "./ProjectInfo";
import preview_jobly from "../../../pics/jobly03.jpg";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  joblyContainerStyles: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: {
      default: "space-evenly",
      "@media (max-width: 767.98px)": "center",
    },
    flexDirection: {
      default: "row-reverse",
      "@media (max-width: 767.98px)": "column",
    },
    paddingTop: {
      default: "5em",
      "@media (max-width: 767.98px)": "0em",
    },
    paddingBottom: {
      default: "5em",
      "@media (max-width: 767.98px)": "0em",
    },
  },
  imageContainerStyles: {
    display: "flex",
    alignItems: "flex-end",
    height: {
      default: "100%",
      "@media (max-width: 767.98px)": "20vh",
    },
    width: {
      default: "25vw",
      "@media (max-width: 767.98px)": "100%",
    },
    justifyContent: {
      "@media (max-width: 767.98px)": "center",
    },
    marginHorizontal: "4em",
    marginVertical: {
      default: "4em",
      "@media (max-width: 767.98px)": "2em",
    },
  },
  imageStyles: {
    width: {
      default: "100%",
      "@media (max-width: 767.98px)": "auto",
    },
    height: {
      "@media (max-width: 767.98px)": "100%",
    },
    boxShadow: "5px 5px 18px black",
  },
});

export default function PortfolioJobly() {
  return (
    <div {...stylex.props(styles.joblyContainerStyles)}>
      <div {...stylex.props(styles.imageContainerStyles)}>
        <img
          {...stylex.props(styles.imageStyles)}
          src={preview_jobly}
          alt="jobly preview image"
        />
      </div>
      <ProjectInfo
        githubLink="https://github.com/wongco/react-jobly"
        header="Jobly"
        body="Built using a React frontend and a RESTful API backend, Jobly is a job listing board and job application tool built with user authentication and job/company searching."
        tags={[
          "React",
          "Express",
          "Styled Components",
          "RESTful API",
          "PostgreSQL",
          "JWT",
        ]}
      />
    </div>
  );
}
