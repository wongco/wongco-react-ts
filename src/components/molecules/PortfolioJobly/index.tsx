import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PortfolioInfoSection from '../PortfolioInfoSection';

const StyledJoblyContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 5em;
  padding-bottom: 5em;

  @media (max-width: 767.98px) {
    justify-content: center;
    flex-direction: column;
    padding-top: 0em;
    padding-bottom: 0em;
  }
`;

const StyledImgContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  width: 25vw;
  margin: 4em;

  @media (max-width: 767.98px) {
    margin-top: 2em;
    margin-bottom: 2em;
    height: 20vh;
    width: 100%;
    justify-content: center;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  box-shadow: 5px 5px 18px black;

  @media (max-width: 767.98px) {
    width: auto;
    height: 100%;
  }
`;

class PortfolioJobly extends PureComponent<PortfolioJoblyProps> {
  public render() {
    const { preview, title, link, githubLink, alt, text, apple } = this.props;
    return (
      <StyledJoblyContainer>
        <StyledImgContainer>
          <StyledImg src={preview} alt={alt} />
        </StyledImgContainer>
        <PortfolioInfoSection
          githubLink={githubLink}
          apple={apple}
          link={link}
          title={title}
          text={text}
        />
      </StyledJoblyContainer>
    );
  }
}

interface PortfolioJoblyProps {
  title: string;
  link?: string;
  apple?: string;
  githubLink?: string;
  preview: any;
  alt: string;
  text: string;
}

export default PortfolioJobly;
