import { faApple, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledPortfolioItem = styled.div`
  font-family: 'GothamLight', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 350px;
  border-radius: 5px;
  box-shadow: 0px 0px 9px gray;
  background-color: white;
  overflow: hidden;
  margin: 30px;
`;

const StyledDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 4em;
  border-top: 1px solid lightgray;
`;

const StyledImgContainer = styled.div`
  height: 180px;
  width: 100%;
  overflow: hidden;
`;

const StyledImg = styled.img`
  height: 100%;
`;

const StyledPortfolioText = styled.div`
  height: 160px;
  padding: 0 15px;
  box-sizing: border-box;
  border-top: 1px solid lightgray;
`;

const StyledLink = styled.a`
  text-decoration: none;
  width: 100%;
  height: 100%;
`;

const StyledDetailsTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  font-weight: 300;
  width: 100%;
  height: 100%;
  border-right: 1px solid lightgray;
  overflow: hidden;

  &:hover {
    background-color: steelblue;
    color: white;
    transition: color 0.5s, background-color 0.5s;
  }
`;

const StyledLastDetailTab = styled(StyledDetailsTab)`
  border-right: none;
`;

const StyledProjectTitle = styled.div`
  /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
  font-size: 150%;
  margin: 7px 0;
  padding: 10px 0;
  font-weight: bold;
`;

const StyledBodyText = styled.div`
  /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
  margin: 5px 0;
  line-height: 25px;
  color: #45474c;
`;

const StyledLinkText = styled.div`
  margin: 15px;
`;

class PortfolioItem extends PureComponent<PortfolioItemProps> {
  public render() {
    const { preview, title, link, githubLink, alt, text, apple } = this.props;
    return (
      <StyledPortfolioItem>
        <StyledImgContainer>
          <StyledImg src={preview} alt={alt} />
        </StyledImgContainer>
        <StyledPortfolioText>
          <StyledProjectTitle>{title}</StyledProjectTitle>
          <StyledBodyText>{text}</StyledBodyText>
        </StyledPortfolioText>
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
      </StyledPortfolioItem>
    );
  }
}

interface PortfolioItemProps {
  title: string;
  link?: string;
  apple?: string;
  githubLink?: string;
  preview: any;
  alt: string;
  text: string;
}

export default PortfolioItem;
