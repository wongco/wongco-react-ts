import React from 'react';
import styled from 'styled-components';
import preview_jobly from '../../../pics/jobly01.png';
import PortfolioItem from '../../atoms/PortfolioItem';

const StyledPortfolioContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #6c757d;
  height: 100%;
`;

const StyledDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 2em;
  background-color: white;
  border-top: 2px solid lightgray;
  border-bottom: 2px solid lightgray;
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
  }
`;

const StyledLastDetailTab = styled(StyledDetailsTab)`
  border-right: none;
`;

const Portfolio = () => {
  return (
    <StyledPortfolioContainer id="portfolio">
      <PortfolioItem
        title="Jobly"
        preview={preview_jobly}
        link={'https://jobly-wongco.herokuapp.com/'}
        githubLink={'https://github.com/wongco/react-jobly'}
        alt={'jobly preview image'}
      />
      <PortfolioItem
        title="Jobly"
        preview={preview_jobly}
        link={'https://jobly-wongco.herokuapp.com/'}
        githubLink={'https://github.com/wongco/react-jobly'}
        alt={'jobly preview image'}
      />
      <PortfolioItem
        title="Jobly"
        preview={preview_jobly}
        link={'https://jobly-wongco.herokuapp.com/'}
        githubLink={'https://github.com/wongco/react-jobly'}
        alt={'jobly preview image'}
      />
      {/* <PortfolioItem>Meme Generator</PortfolioItem>
      <PortfolioItem>Hack or Snooze</PortfolioItem>
      <PortfolioItem>Jobly</PortfolioItem>
      <PortfolioItem>Warbler</PortfolioItem>
      <PortfolioItem>MicroBlog</PortfolioItem> */}
    </StyledPortfolioContainer>
  );
};

export default Portfolio;
