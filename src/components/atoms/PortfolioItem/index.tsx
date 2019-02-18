import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledPortfolioItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 350px;
  border-radius: 5px;
  box-shadow: 0px 0px 9px white;
  background-color: white;
  overflow: hidden;
  margin: 30px 0;
`;

const StyledDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 2em;
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
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* width: 100%; */
  height: 110px;
  padding: 0 15px;
  box-sizing: border-box;
  border-top: 1px solid lightgray;
  /* background-color: red; */
`;

const StyledLink = styled.a`
  text-decoration: none;
  width: 100%;
`;

const StyledDetailsTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  font-weight: 600;
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
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 150%;
  margin: 7px 0;
  font-weight: bold;
`;

const StyledBodyText = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: 5px 0;
`;

const StyledLinkText = styled.div`
  margin: 15px;
`;

class PortfolioItem extends PureComponent<PortfolioItemProps> {
  public render() {
    const { preview, title, link, githubLink, alt, text } = this.props;
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
          <StyledLink href={link}>
            <StyledDetailsTab>
              <FontAwesomeIcon icon={faLink} size={'1x'} style={{ padding: '0 10px' }} />
              <StyledLinkText>Website</StyledLinkText>
            </StyledDetailsTab>
          </StyledLink>
          <StyledLink href={githubLink}>
            <StyledLastDetailTab>
              <FontAwesomeIcon icon={faGithub} size={'1x'} style={{ padding: '0 10px' }} />
              <StyledLinkText>Github</StyledLinkText>
            </StyledLastDetailTab>
          </StyledLink>
        </StyledDetailsContainer>
      </StyledPortfolioItem>
    );
  }
}

interface PortfolioItemProps {
  title: string;
  link: string;
  githubLink: string;
  preview: any;
  alt: string;
  text: string;
}

export default PortfolioItem;
