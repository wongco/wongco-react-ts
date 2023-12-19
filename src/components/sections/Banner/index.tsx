import bannerImage from "../../../pics/baybridge_banner2.jpg";
import * as stylex from "@stylexjs/stylex";

const fadeIn = stylex.keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const styles = stylex.create({
  bannerSection: {
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
  bannerTextContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "100%",
    boxSizing: "border-box",
  },
  bannerTextSubContainer: {
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
  runnerLineBase: {
    opacity: 0,
    animationName: fadeIn,
    animationIterationCount: 1,
    animationTimingFunction: "ease-in",
    animationFillMode: "forwards",
    animationDuration: "1s",
  },
  runnerLineOne: {
    animationDelay: "0.5s",
  },
  runnerLineTwo: {
    animationDelay: "1.5s",
  },
  runnerLineThree: {
    animationDelay: "2.5s",
  },
  logoContainer: {
    position: "relative",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "100%",
    overflow: {
      "@media (max-width: 767.98px)": "hidden",
    },
  },
  image: {
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
  textContainer: {
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
  name: {
    fontSize: {
      default: "4vw",
      "@media (max-width: 767.98px)": "2em",
    },
  },
  title: {
    fontSize: {
      default: "2vw",
      "@media (max-width: 767.98px)": "1em",
    },
    fontWeight: 600,
  },
});

const runnerLineOneStyles = stylex.props(
  styles.runnerLineBase,
  styles.runnerLineOne,
);

const runnerLineTwoStyles = stylex.props(
  styles.runnerLineBase,
  styles.runnerLineTwo,
);

const runnerLineThreeStyles = stylex.props(
  styles.runnerLineBase,
  styles.runnerLineThree,
);

const NAME = "Ginson Wong";
const OCCUPATION = "Software Engineer";

export default function Banner() {
  return (
    <section {...stylex.props(styles.bannerSection)}>
      <div {...stylex.props(styles.bannerTextContainer)}>
        <div {...stylex.props(styles.bannerTextSubContainer)}>
          <div {...runnerLineOneStyles}>Inspired&nbsp;ideas. </div>
          <div {...runnerLineTwoStyles}>Attention&nbsp;to&nbsp;detail. </div>
          <div {...runnerLineThreeStyles}>Responsive&nbsp;design. </div>
        </div>
      </div>
      <div {...stylex.props(styles.logoContainer)} id="home">
        <img
          {...stylex.props(styles.image)}
          src={bannerImage}
          alt="banner-picture"
        />
        <div {...stylex.props(styles.textContainer)}>
          <div {...stylex.props(styles.name)}>{NAME}</div>
          <div {...stylex.props(styles.title)}>{OCCUPATION}</div>
        </div>
      </div>
    </section>
  );
}
