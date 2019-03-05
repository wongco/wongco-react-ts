import { faApple, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PortfolioButtons from '../PortfolioButtons';

const StyledGroupmuseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  border-top: 1px solid gray;
  padding-top: 3em;

  @media (max-width: 767.98px) {
    flex-direction: column;
  }
  /* border-bottom: 1px solid gray; */
`;

const StyledImgContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  width: 25vw;
  margin-top: 50px;

  @media (max-width: 767.98px) {
    margin-top: 0;
    width: 70vw;
  }
`;

const StyledImg = styled.img`
  width: 100%;
`;

/** Project Verbiage Section */
const StyledPortfolioText = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 15px;
  width: 40vw;

  @media (max-width: 767.98px) {
    margin: 0;
    padding: 0;
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

/** Links Section */

const StyledDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  height: 4em;
  margin-top: 1em;
  width: 30vw;
  max-width: 500px;

  @media (max-width: 576px) {
    width: 70vw;
    justify-content: center;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  width: 20em;
  height: 100%;
  border: 1px solid lightgray;
`;

const StyledLinkText = styled.div`
  margin: 15px;
`;

const StyledDetailsTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  width: 100%;
  height: 100%;
  color: black;
  background-color: lightgoldenrodyellow;
  transition: color 0.5s, background-color 0.5s;

  &:hover {
    background-color: steelblue;
    color: white;
  }
`;

const StyledLastDetailTab = styled(StyledDetailsTab)`
  border-right: none;
`;

class PortfolioGroupmuse extends PureComponent<PortfolioGroupmuseProps> {
  public render() {
    const { preview, title, link, githubLink, alt, text, apple } = this.props;
    return (
      <StyledGroupmuseContainer>
        <StyledImgContainer>
          <StyledImg src={preview} alt={alt} />
        </StyledImgContainer>
        <StyledPortfolioText>
          <StyledProjectTitle>{title}</StyledProjectTitle>
          <StyledBodyText>{text}</StyledBodyText>
          <PortfolioButtons githubLink={githubLink} apple={apple} link={link} />
        </StyledPortfolioText>
      </StyledGroupmuseContainer>
    );
  }
}

interface PortfolioGroupmuseProps {
  title: string;
  link?: string;
  apple?: string;
  githubLink?: string;
  preview: any;
  alt: string;
  text: string;
}

export default PortfolioGroupmuse;
