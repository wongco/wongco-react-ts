import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledPortfolioItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  width: 300px;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
`;

const StyledDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 2em;
  border-top: 2px solid lightgray;
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
  border-right: 2px solid lightgray;
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

const StyledText = styled.div`
  margin: 15px;
`;

class PortfolioItem extends PureComponent<PortfolioItemProps> {
  public render() {
    return (
      <StyledPortfolioItem>
        <div>{this.props.name}</div>
        <StyledDetailsContainer>
          <StyledLink href={'test'}>
            <StyledDetailsTab>
              <FontAwesomeIcon icon={faLink} size={'1x'} style={{ padding: '0 10px' }} />
              <StyledText>Link</StyledText>
            </StyledDetailsTab>
          </StyledLink>
          <StyledLink href={'test'}>
            <StyledLastDetailTab>
              <FontAwesomeIcon icon={faGithub} size={'1x'} style={{ padding: '0 10px' }} />
              <StyledText>Github</StyledText>
            </StyledLastDetailTab>
          </StyledLink>
        </StyledDetailsContainer>
      </StyledPortfolioItem>
    );
  }
}

interface PortfolioItemProps {
  name: string;
}

{
  /* <PortfolioItem>
<div>Meme Generator</div>	        <div>Img Stuff</div>
  <StyledDetailsContainer>
    <StyledDetailsTab>Link</StyledDetailsTab>
    <StyledDetailsTab>Github</StyledDetailsTab>
    <StyledLastDetailTab>About</StyledLastDetailTab>
  </StyledDetailsContainer>
</PortfolioItem>
<PortfolioItem>Meme Generator</PortfolioItem> */
}

export default PortfolioItem;
