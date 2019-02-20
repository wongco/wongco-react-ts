import { faApple, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledContainerOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`;

const StyledImgContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  width: 20vw;
  margin-top: 100px;

  @media (max-width: 767.98px) {
    width: 40vw;
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

  @media (max-width: 576px) {
    width: 42vw;
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
  margin: 5px 0;
  color: #45474c;
  /* font-size: 1.7em; */
  font-size: 1.5vw;
  line-height: 1.4em;
  font-weight: 300;
  width: 100%;
  padding: 1em 0;

  @media (max-width: 767.98px) {
    display: none;
  }
`;

/** Links Section */

const StyledDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 4em;

  @media (max-width: 576px) {
    height: 2em;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  width: 15em;
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

class PortfolioItemOne extends PureComponent<PortfolioItemOneProps> {
  public render() {
    const { preview, title, link, githubLink, alt, text, apple } = this.props;
    return (
      <StyledContainerOne>
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
                  <FontAwesomeIcon icon={faApple} size={'1x'} style={{ padding: '0 10px' }} />
                  <StyledLinkText>App Store</StyledLinkText>
                </StyledDetailsTab>
              </StyledLink>
            )}
            {link && (
              <StyledLink href={link}>
                <StyledDetailsTab>
                  <FontAwesomeIcon icon={faLink} size={'1x'} style={{ padding: '0 10px' }} />
                  <StyledLinkText>Website</StyledLinkText>
                </StyledDetailsTab>
              </StyledLink>
            )}
            {githubLink && (
              <StyledLink href={githubLink}>
                <StyledLastDetailTab>
                  <FontAwesomeIcon icon={faGithub} size={'1x'} style={{ padding: '0 10px' }} />
                  <StyledLinkText>Github</StyledLinkText>
                </StyledLastDetailTab>
              </StyledLink>
            )}
          </StyledDetailsContainer>
        </StyledPortfolioText>
      </StyledContainerOne>
    );
  }
}

interface PortfolioItemOneProps {
  title: string;
  link?: string;
  apple?: string;
  githubLink?: string;
  preview: any;
  alt: string;
  text: string;
}

export default PortfolioItemOne;
