import React from 'react';
import styled from 'styled-components';
import preview_hackorsnooze from '../../../pics/hackorsnooze01.png';
import preview_jobly from '../../../pics/jobly01.jpg';
import preview_warbler from '../../../pics/warbler01.png';
import PortfolioItem from '../../atoms/PortfolioItem';

const StyledPortfolioContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #edf1f9;
  height: 100%;
  padding: 20px;
`;

const Portfolio = () => {
  return (
    <StyledPortfolioContainer id="portfolio">
      <PortfolioItem
        title="Groupmuse"
        text="React Native Mobile App for in home classical concerts."
        preview={preview_hackorsnooze}
        apple={'https://itunes.apple.com/us/app/groupmuse/id942675649'}
        alt={'groupmuse preview image'}
      />
      <PortfolioItem
        title="Jobly"
        text="React Front End job board application with User Authentication, RESTful API Backend"
        preview={preview_jobly}
        link={'https://jobly-wongco.herokuapp.com/'}
        githubLink={'https://github.com/wongco/react-jobly'}
        alt={'jobly preview image'}
      />
      <PortfolioItem
        title="Hack or Snooze"
        text="jQuery Frontend and RESTful API Backend Story board application with User Authentication."
        preview={preview_hackorsnooze}
        link={'https://wongco.github.io/hack-or-snooze-fe/'}
        githubLink={'https://github.com/wongco/hack-or-snooze-fe'}
        alt={'hack or snooze preview image'}
      />
      <PortfolioItem
        title="Warbler"
        text="Twitter Style Clone"
        preview={preview_warbler}
        link={'https://warbler-wongco.herokuapp.com/'}
        githubLink={'https://github.com/wongco/warbler'}
        alt={'warbler preview image'}
      />
      {/* <PortfolioItem
        title="Microblog"
        text="Web blog application including voting and comments"
        preview={preview_hackorsnooze}
        link={'futurelink'}
        githubLink={'https://github.com/wongco/redux-microblog'}
        alt={'hack or snooze preview image'}
      /> */}
      {/* <PortfolioItem>Meme Generator</PortfolioItem> 
      <PortfolioItem>Hack or Snooze</PortfolioItem> */}
    </StyledPortfolioContainer>
  );
};

export default Portfolio;
