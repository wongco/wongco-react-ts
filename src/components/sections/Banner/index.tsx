import styled, { keyframes } from "styled-components";
import bannerImage from "../../../pics/baybridge_banner2.jpg";
import * as stylex from "@stylexjs/stylex";

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
});

const fadeInOpacity = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const RunnerLine = styled.div`
  opacity: 0;
  animation-name: ${fadeInOpacity};
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  animation-duration: 1s;
`;

const RunnerLineOne = styled(RunnerLine)`
  animation-delay: 0.5s;
`;

const RunnerLineTwo = styled(RunnerLine)`
  animation-delay: 1.5s;
`;

const RunnerLineThree = styled(RunnerLine)`
  animation-delay: 2.5s;
`;

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

export default function Banner() {
  return (
    <section {...stylex.props(styles.bannerSectionStyles)}>
      <div {...stylex.props(styles.bannerTextContainerStyles)}>
        <div {...stylex.props(styles.bannerTextSubContainerStyles)}>
          <RunnerLineOne>Inspired&nbsp;ideas. </RunnerLineOne>
          <RunnerLineTwo>Attention&nbsp;to&nbsp;detail. </RunnerLineTwo>
          <RunnerLineThree>Responsive&nbsp;design. </RunnerLineThree>
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
