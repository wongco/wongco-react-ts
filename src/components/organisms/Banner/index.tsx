import React, { Component } from 'react';
import styled from 'styled-components';
import bannerImage from '../../../pics/baybridge_banner.png';

const LogoContainer = styled.div`
  position: relative;
  background-color: #343a40;
  flex: 1 1 100%;

  @media (max-width: 576px) {
    overflow: hidden;
  }
`;

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  opacity: 1;

  @media (max-width: 576px) {
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
`;

const StyledName = styled.div`
  font-size: 4em;
  @media (min-width: 576px) and (max-width: 991.98px) {
    font-size: 2.75em;
  }
  @media (max-width: 576px) {
    font-size: 2em;
  }
`;

const StyledTitle = styled.div`
  font-size: 2em;
  font-weight: 600;

  @media (max-width: 576px) {
    font-size: 1em;
  }
`;

const BannerContainer = styled.section`
  display: flex;
  flex-direction: row;
  padding: 2em 2em;

  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
    align-self: center;
    padding: 0em 2em;
  }
`;

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
  /* border: 1px solid red; */

  @media (max-width: 576px) {
    font-size: 2em;
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
