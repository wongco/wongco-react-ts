import styled, { keyframes } from 'styled-components';

import bannerImage from '../../../pics/baybridge_banner2.jpg';

/** parent container for banner section */
const BannerSection = styled.section`
  display: flex;
  flex-direction: row;
  padding: 2em 5em;

  @media (max-width: 767.98px) {
    flex-direction: column;
    justify-content: center;
    align-self: center;
    padding: 0em 2em;
  }
`;

/** primary container for left side text */
const BannerTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1 1 100%;
  box-sizing: border-box;
  /* border: 1px solid black; */
`;

const BannerTextSubContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 3.5vw;
  line-height: 1.25em;
  font-weight: 300;
  text-align: center;
  padding: 1em;

  @media (max-width: 767.98px) {
    font-size: 2.25em;
  }
`;

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
    <BannerSection>
      <BannerTextContainer>
        <BannerTextSubContainer>
          <RunnerLineOne>Inspired&nbsp;ideas. </RunnerLineOne>
          <RunnerLineTwo>Attention&nbsp;to&nbsp;detail. </RunnerLineTwo>
          <RunnerLineThree>Responsive&nbsp;design. </RunnerLineThree>
        </BannerTextSubContainer>
      </BannerTextContainer>
      <LogoContainer id="home">
        <StyledImg src={bannerImage} alt="banner-picture" />
        <StyledTextContainer>
          <StyledName>Ginson Wong</StyledName>
          <StyledTitle>Software Engineer</StyledTitle>
        </StyledTextContainer>
      </LogoContainer>
    </BannerSection>
  );
}
