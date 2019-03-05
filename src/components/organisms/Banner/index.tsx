import React, { Component } from 'react';
import styled from 'styled-components';
import bannerImage from '../../../pics/baybridge_banner2.jpg';

/** parent container for banner section */
const BannerContainer = styled.section`
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

class Banner extends Component {
  public render() {
    return (
      <BannerContainer>
        <BannerTextContainer>
          <BannerTextSubContainer>
            <div>Inspired&nbsp;ideas. </div>
            <div>Attention&nbsp;to&nbsp;detail. </div>
            <div>Responsive&nbsp;design. </div>
          </BannerTextSubContainer>
        </BannerTextContainer>
        <LogoContainer id="home">
          <StyledImg src={bannerImage} alt="banner-picture" />
          <StyledTextContainer>
            <StyledName>Ginson Wong</StyledName>
            <StyledTitle>Software Engineer</StyledTitle>
          </StyledTextContainer>
        </LogoContainer>
      </BannerContainer>
    );
  }
}

export default Banner;
