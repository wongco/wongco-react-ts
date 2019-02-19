import React, { Component } from 'react';
import styled from 'styled-components';
import bannerImage from '../../../pics/baybridge_banner.png';

const StyledBannerContainer = styled.div`
  position: relative;
  @media (max-width: 576px) {
    overflow: hidden;
  }
  background-color: #343a40;
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
  font-weight: 800;
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

class Banner extends Component {
  public render() {
    return (
      <StyledBannerContainer id="home">
        <StyledImg src={bannerImage} alt="banner-picture" />
        <StyledTextContainer>
          <StyledName>Ginson Wong</StyledName>
          <StyledTitle>Software Engineer</StyledTitle>
        </StyledTextContainer>
      </StyledBannerContainer>
    );
  }
}

export default Banner;
