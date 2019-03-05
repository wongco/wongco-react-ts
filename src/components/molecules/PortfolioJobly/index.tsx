import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PortfolioButtons from '../PortfolioButtons';

const StyledJoblyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 5em;
  padding-bottom: 5em;
  /* border-bottom: 1px solid gray; */

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
    margin-top: 1em;
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

/** Project Verbiage Section */
const StyledPortfolioText = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 40vw;
  margin-left: 1.5em;
  margin-bottom: 1.5em;

  @media (max-width: 767.98px) {
    margin: 0;
    margin-bottom: 1.5em;
    align-items: center;
    width: 70vw;
  }
`;

const StyledProjectTitle = styled.div`
  font-size: 2.2vw;
  margin: 7px 0;
  padding: 10px 0;
  font-weight: 400;

  @media (max-width: 767.98px) {
    margin-top: 18px;
    font-size: 7vw;
  }
`;

const StyledBodyText = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
  color: #45474c;
  font-size: 1.5vw;
  line-height: 1.4em;
  font-weight: 300;
  width: 100%;
  padding-bottom: 1em 0;

  @media (max-width: 767.98px) {
    font-size: 4vw;
  }
`;

class PortfolioJobly extends PureComponent<PortfolioJoblyProps> {
  public render() {
    const { preview, title, link, githubLink, alt, text, apple } = this.props;
    return (
      <StyledJoblyContainer>
        <StyledPortfolioText>
          <StyledProjectTitle>{title}</StyledProjectTitle>
          <StyledBodyText>{text}</StyledBodyText>
          <PortfolioButtons githubLink={githubLink} apple={apple} link={link} />
        </StyledPortfolioText>
        <StyledImgContainer>
          <StyledImg src={preview} alt={alt} />
        </StyledImgContainer>
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
