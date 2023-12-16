import bannerImage from "../../../pics/baybridge_banner2.jpg";
import * as stylex from "@stylexjs/stylex";

const fadeIn = stylex.keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const styles = stylex.create({
  bannerSectionStyles: {
    display: "flex",
    flexDirection: {
      default: "row",
      "@media (max-width: 767.98px)": "column",
    },
    padding: {
      default: "2em 5em",
      "@media (max-width: 767.98px)": "0em 2em",
    },
    justifyContent: {
      "@media (max-width: 767.98px)": "center",
    },
    alignSelf: {
      "@media (max-width: 767.98px)": "center",
    },
  },
  bannerTextContainerStyles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "100%",
    boxSizing: "border-box",
  },
  bannerTextSubContainerStyles: {
    display: "flex",
    boxSizing: "border-box",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    fontSize: {
      default: "3.5vw",
      "@media (max-width: 767.98px)": "2.25em",
    },
    lineHeight: "1.25em",
    fontWeight: 300,
    textAlign: "center",
    padding: "1em",
  },
  runnerLineBaseStyles: {
    opacity: 0,
    animationName: fadeIn,
    animationIterationCount: 1,
    animationTimingFunction: "ease-in",
    animationFillMode: "forwards",
    animationDuration: "1s",
  },
  runnerLineOneStyles: {
    animationDelay: "0.5s",
  },
  runnerLineTwoStyles: {
    animationDelay: "1.5s",
  },
  runnerLineThreeStyles: {
    animationDelay: "2.5s",
  },
  logoContainerStyles: {
    position: "relative",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "100%",
    overflow: {
      "@media (max-width: 767.98px)": "hidden",
    },
  },
  imageStyles: {
    height: {
      default: "100%",
      "@media (max-width: 767.98px)": " 200px",
    },
    width: {
      default: "100%",
      "@media (max-width: 767.98px)": "auto",
    },
    objectFit: "contain",
    opacity: 1,
  },
  textContainerStyles: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    textAlign: "center",
    fontWeight: 400,
    color: "Cornsilk",
    textShadow: "0px 0px 18px black",
    width: "100%",
  },
  nameStyles: {
    fontSize: {
      default: "4vw",
      "@media (max-width: 767.98px)": "2em",
    },
  },
  titleStyles: {
    fontSize: {
      default: "2vw",
      "@media (max-width: 767.98px)": "1em",
    },
    fontWeight: 600,
  },
});

const runnerLineOneStyles = stylex.props(
  styles.runnerLineBaseStyles,
  styles.runnerLineOneStyles,
);

const runnerLineTwoStyles = stylex.props(
  styles.runnerLineBaseStyles,
  styles.runnerLineTwoStyles,
);

const runnerLineThreeStyles = stylex.props(
  styles.runnerLineBaseStyles,
  styles.runnerLineThreeStyles,
);

const NAME = "Ginson Wong";
const OCCUPATION = "Software Engineer";

export default function Banner() {
  return (
    <section {...stylex.props(styles.bannerSectionStyles)}>
      <div {...stylex.props(styles.bannerTextContainerStyles)}>
        <div {...stylex.props(styles.bannerTextSubContainerStyles)}>
          <div {...runnerLineOneStyles}>Inspired&nbsp;ideas. </div>
          <div {...runnerLineTwoStyles}>Attention&nbsp;to&nbsp;detail. </div>
          <div {...runnerLineThreeStyles}>Responsive&nbsp;design. </div>
        </div>
      </div>
      <div {...stylex.props(styles.logoContainerStyles)} id="home">
        <img
          {...stylex.props(styles.imageStyles)}
          src={bannerImage}
          alt="banner-picture"
        />
        <div {...stylex.props(styles.textContainerStyles)}>
          <div {...stylex.props(styles.nameStyles)}>{NAME}</div>
          <div {...stylex.props(styles.titleStyles)}>{OCCUPATION}</div>
        </div>
      </div>
    </section>
  );
}
