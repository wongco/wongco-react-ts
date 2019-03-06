import { faApple, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

/** Links Section */
const StyledDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: 'flex-start';
  height: 3em;
  margin-top: 1em;
  width: 15vw;
  max-width: 500px;

  @media (max-width: 767.98px) {
    width: 50vw;
    justify-content: center;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  width: 7em;
  height: 100%;
  border: 1px solid lightgray;
  padding-left: 0.5em;
  padding-right: 0.5em;
  background-color: lightgoldenrodyellow;
  transition: color 0.5s, background-color 0.5s;

  &:hover {
    background-color: steelblue;
    color: white;
  }
`;

const StyledLinkText = styled.div`
  margin-left: 0.5em;
`;

const StyledDetailsTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  width: 100%;
  height: 100%;
  color: black;
`;

const PortfolioButtons: React.SFC<PortfolioButtonProps> = props => {
  const { apple, link, githubLink } = props;
  return (
    <StyledDetailsContainer>
      {apple && (
        <StyledLink href={apple}>
          <StyledDetailsTab>
            <FontAwesomeIcon icon={faApple} size={'1x'} />
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
  );
};

interface PortfolioButtonProps {
  apple?: string;
  link?: string;
  githubLink?: string;
}

export default PortfolioButtons;
