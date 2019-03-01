import { faApple, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledHackSnoozeContainer = styled.div`
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
    flex-direction: column-reverse;
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

/** Links Section */
const StyledDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 4em;
  margin-top: 1em;
  width: 30vw;
  max-width: 500px;

  @media (max-width: 576px) {
    width: 70vw;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  width: 100%;
  height: 100%;
  border: 1px solid lightgray;
`;

const StyledLinkText = styled.div`
  /* margin: 15px; */
`;

const StyledDetailsTab = styled.div`
  display: flex;
  justify-content: space-evenly;
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

class PortfolioHackSnooze extends PureComponent<PortfolioHackSnoozeProps> {
  public render() {
    const { preview, title, link, githubLink, alt, text, apple } = this.props;
    return (
      <StyledHackSnoozeContainer>
        <StyledImgContainer>
          <StyledImg src={preview} alt={alt} />
        </StyledImgContainer>
        <StyledPortfolioText>
          <StyledProjectTitle>{title}</StyledProjectTitle>
          <StyledBodyText>{text}</StyledBodyText>
          <StyledDetailsContainer>
            {apple && (
              <StyledLink href={apple}>
                <StyledDetailsTab>
                  <FontAwesomeIcon icon={faApple} size={'1x'} style={{ padding: '0' }} />
                  <StyledLinkText>App Store</StyledLinkText>
                </StyledDetailsTab>
              </StyledLink>
            )}
            {link && (
              <StyledLink href={link}>
                <StyledDetailsTab>
                  <FontAwesomeIcon icon={faLink} size={'1x'} style={{ padding: '0' }} />
                  <StyledLinkText>Website</StyledLinkText>
                </StyledDetailsTab>
              </StyledLink>
            )}
            {githubLink && (
              <StyledLink href={githubLink}>
                <StyledDetailsTab>
                  <FontAwesomeIcon icon={faGithub} size={'1x'} style={{ padding: '0' }} />
                  <StyledLinkText>Github</StyledLinkText>
                </StyledDetailsTab>
              </StyledLink>
            )}
          </StyledDetailsContainer>
        </StyledPortfolioText>
      </StyledHackSnoozeContainer>
    );
  }
}

interface PortfolioHackSnoozeProps {
  title: string;
  link?: string;
  apple?: string;
  githubLink?: string;
  preview: any;
  alt: string;
  text: string;
}

export default PortfolioHackSnooze;
