import ProjectInfo from "./ProjectInfo";
import preview_groupmuse from "../../../pics/groupmuse04.png";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  groupmuseContainerStyles: {
    display: "flex",
    flexDirection: {
      default: "row",
      "@media (max-width: 767.98px)": "column",
    },
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderTopWidth: "1px",
    borderTopColor: "gray",
    borderTopStyle: "solid",
    paddingTop: "3em",
  },
  imageContainerStyles: {
    display: "flex",
    alignItems: "flex-end",
    height: "100%",
    width: {
      default: "25vw",
      "@media (max-width: 767.98px)": "70vw",
    },
    marginTop: {
      default: "50px",
      "@media (max-width: 767.98px)": "0",
    },
  },
  imageStyles: {
    width: "100%",
  },
});

export default function PortfolioGroupmuse() {
  return (
    <div {...stylex.props(styles.groupmuseContainerStyles)}>
      <div {...stylex.props(styles.imageContainerStyles)}>
        <img
          {...stylex.props(styles.imageStyles)}
          src={preview_groupmuse}
          alt="groupmuse preview image"
        />
      </div>
      <ProjectInfo
        tags={[
          "React Native",
          "Render Props",
          "Compound Components",
          "Atomic Design",
        ]}
        appleAppStoreLink="https://itunes.apple.com/us/app/groupmuse/id942675649"
        header="Groupmuse"
        body="Refactoring the templates and dependent components for the authorization workflow enabled our agile team to create a foundation for rebuilding the react native mobile app. This was achieved using compound components, render props, and atomic design."
      />
    </div>
  );
}
