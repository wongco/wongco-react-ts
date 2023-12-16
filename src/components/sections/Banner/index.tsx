import styled from "styled-components";
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
});

/** primary container for right side image */
const LogoContainer = styled.div`
  position: relative;
  /* background-color: #343a40; */
  flex: 1 1 100%;

  @media (max-width: 767.98px) {
    overflow: hidden;
  }
`;

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  opacity: 1;

  @media (max-width: 767.98px) {
    height: 200px;
    width: auto;
  }
`;

const StyledTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
  font-weight: 400;
  color: Cornsilk;
  text-shadow: 0px 0px 18px black;
  width: 100%;
`;

const StyledName = styled.div`
  font-size: 4vw;
  @media (max-width: 767.98px) {
    font-size: 2em;
  }
`;

const StyledTitle = styled.div`
  font-size: 2vw;
  font-weight: 600;

  @media (max-width: 767.98px) {
    font-size: 1em;
  }
`;

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
      <LogoContainer id="home">
        <StyledImg src={bannerImage} alt="banner-picture" />
        <StyledTextContainer>
          <StyledName>Ginson Wong</StyledName>
          <StyledTitle>Software Engineer</StyledTitle>
        </StyledTextContainer>
      </LogoContainer>
    </section>
  );
}
