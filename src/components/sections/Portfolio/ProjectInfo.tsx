import AOS from "aos";
import { useEffect } from "react";
import ProjectButtons from "./ProjectButtons";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  projectInfoContainer: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    marginTop: {
      "@media (max-width: 767.98px)": 0,
    },
    marginBottom: "1.5em",
    marginLeft: {
      default: "1.5em",
      "@media (max-width: 767.98px)": 0,
    },
    marginRight: {
      "@media (max-width: 767.98px)": 0,
    },
    alignItems: {
      default: "flex-start",
      "@media (max-width: 767.98px)": "center",
    },
    width: {
      default: "40vw",
      "@media (max-width: 767.98px)": "70vw",
    },
    order: {
      "@media (max-width: 767.98px)": 1,
    },
  },
  projectTitle: {
    marginBottom: "7px",
    marginLeft: 0,
    marginRight: 0,
    paddingBottom: "5px",
    paddingLeft: 0,
    paddingRight: 0,
    fontSize: {
      default: "2.2vw",
      "@media (max-width: 767.98px)": "7vw",
    },
    fontWeight: {
      default: 400,
      "@media (max-width: 767.98px)": 500,
    },
    marginTop: {
      default: "7px",
      "@media (max-width: 767.98px)": "18px",
    },
    paddingTop: {
      default: "5px",
      "@media (max-width: 767.98px)": 0,
    },
  },
  tags: {
    fontWeight: 300,
    fontStyle: "italic",
    borderLeftWidth: "2px",
    borderLeftStyle: "solid",
    borderLeftColor: "blue",
    paddingLeft: "10px",
    width: "100%",
    marginRight: 0,
    fontSize: {
      default: "1.2vw",
      "@media (max-width: 767.98px)": "4vw",
    },
    marginVertical: {
      default: "0.3em",
      "@media (max-width: 767.98px)": "0.4em",
    },
    marginLeft: {
      default: "1px",
      "@media (max-width: 767.98px)": "1em",
    },
  },
  bodyText: {
    marginTop: "5px",
    marginBottom: "10px",
    color: "#45474c",
    fontSize: {
      default: "1.5vw",
      "@media (max-width: 767.98px)": "5vw",
    },
    lineHeight: "1.4em",
    fontWeight: 300,
    width: "100%",
  },
});

interface ProjectInfoProps {
  header: string;
  githubLink?: string;
  body: string;
  appleAppStoreLink?: string;
  tags?: string[];
}

export default function ProjectInfo({
  header,
  githubLink,
  body,
  appleAppStoreLink,
  tags,
}: ProjectInfoProps) {
  useEffect(() => {
    AOS.init({
      duration: 400,
    });
  }, []);

  return (
    <div
      {...stylex.props(styles.projectInfoContainer)}
      data-aos="zoom-out"
      data-aos-delay="200"
      data-aos-easing="ease-in-sine"
    >
      <div {...stylex.props(styles.projectTitle)}>{header}</div>
      {tags ? (
        <div {...stylex.props(styles.tags)}>{tags.join(", ")}</div>
      ) : null}
      <div {...stylex.props(styles.bodyText)}>{body}</div>
      <ProjectButtons
        githubLink={githubLink}
        appleAppStoreLink={appleAppStoreLink}
      />
    </div>
  );
}
