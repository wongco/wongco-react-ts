import React from 'react';
import styled from 'styled-components';
import preview_groupmuse from '../../../pics/groupmuse03.png';
import preview_hackorsnooze from '../../../pics/hackorsnooze02.png';
import preview_jobly from '../../../pics/jobly02.png';
import preview_microblog from '../../../pics/microblog01.png';
import preview_warbler from '../../../pics/warbler02.png';
import PortfolioItem from '../../atoms/PortfolioItem';
import PortfolioItemOne from '../../molecules/PortfolioItemOne';

const StyledPortfolioContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: 20px;
`;

const Portfolio = () => {
  return (
    <StyledPortfolioContainer id="portfolio">
      <PortfolioItemOne
        title="Groupmuse"
        text="Refactoring the templates and dependent components for the authorization workflow enabled our agile team to create a foundation for rebuilding the mobile app for maintainability. This was achieved using compound components, render props, and atomic design."
        preview={preview_groupmuse}
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
        text="Full stack social media application"
        preview={preview_warbler}
        link={'https://warbler-wongco.herokuapp.com/'}
        githubLink={'https://github.com/wongco/warbler'}
        alt={'warbler preview image'}
      />
      <PortfolioItem
        title="Microblog"
        text="Web blog application including voting and comments"
        preview={preview_microblog}
        link={'https://wongco-microblog.herokuapp.com/'}
        githubLink={'https://github.com/wongco/redux-microblog'}
        alt={'microblog preview image'}
      />
      {/* <PortfolioItem>Meme Generator</PortfolioItem> 
      <PortfolioItem>Hack or Snooze</PortfolioItem> */}
    </StyledPortfolioContainer>
  );
};

export default Portfolio;
