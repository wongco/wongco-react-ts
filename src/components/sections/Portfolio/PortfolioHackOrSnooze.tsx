import ProjectInfo from "./ProjectInfo";
import preview_hackorsnooze from "../../../pics/hackorsnooze03.jpg";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  hackSnoozeContainerStyles: {
    display: "flex",
    justifyContent: {
      default: "space-evenly",
      "@media (max-width: 767.98px)": "center",
    },
    flexDirection: {
      default: "row",
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
    alignItems: "center",
    width: "100%",
    height: "100%",
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

export default function PortfolioHackSnooze() {
  return (
    <div {...stylex.props(styles.hackSnoozeContainerStyles)}>
      <div {...stylex.props(styles.imageContainerStyles)}>
        <img
          {...stylex.props(styles.imageStyles)}
          src={preview_hackorsnooze}
          alt="hack or snooze preview image"
        />
      </div>
      <ProjectInfo
        githubLink="https://github.com/wongco/hack-or-snooze-fe"
        tags={["jQuery", "Express", "RESTful API", "PostgreSQL", "JWT"]}
        header="Hack or Snooze"
        body="Hack or Snooze is a Full CRUD story board application clone of Hacker News built with a jQuery frontend and an Express.js backend. It features user authentication, user favorites and the ability to add/delete/modify stories."
      />
    </div>
  );
}
