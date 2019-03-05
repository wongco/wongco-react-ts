import React from 'react';
import styled from 'styled-components';
import preview_groupmuse from '../../../pics/groupmuse04.png';
import preview_hackorsnooze from '../../../pics/hackorsnooze03.jpg';
import preview_jobly from '../../../pics/jobly03.jpg';
import preview_microblog from '../../../pics/microblog01.png';
import preview_warbler from '../../../pics/warbler02.png';
import PortfolioItem from '../../atoms/PortfolioItem';
import PortfolioGroupmuse from '../../molecules/PortfolioGroupmuse';
import PortfolioHackSnooze from '../../molecules/PortfolioHackorSnooze';
import PortfolioJobly from '../../molecules/PortfolioJobly';

const StyledPortfolioContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: 20px;
`;

const StyledDivider = styled.hr`
  /* background-color: red; */
  border-radius: 50px;
  color: gray;
  width: 80vw;
  height: 0.25px;
  margin: 0;
`;

const Portfolio = () => {
  return (
    <StyledPortfolioContainer id="portfolio">
      <PortfolioGroupmuse
        title="Groupmuse"
        text="Refactoring the templates and dependent components for the authorization workflow enabled our agile team to create a foundation for rebuilding the react native mobile app increasing maintainability. This was achieved using compound components, render props, and atomic design."
        preview={preview_groupmuse}
        apple={'https://itunes.apple.com/us/app/groupmuse/id942675649'}
        alt={'groupmuse preview image'}
      />
      <StyledDivider />
      <PortfolioJobly
        title="Jobly"
        text="Built using a React frontend and a RESTful API Node.js/Express.js backend, Jobly is a job search and application tool built with user authentication.  The styling was created from scratch using styled components."
        preview={preview_jobly}
        link={'https://jobly-wongco.herokuapp.com/'}
        githubLink={'https://github.com/wongco/react-jobly'}
        alt={'jobly preview image'}
      />
      <StyledDivider />
      <PortfolioHackSnooze
        title="Hack or Snooze"
        text="Full CRUD story board application built with jQuery frontend and Node.js/Express.js RESTful API backend. Featuring user authentication, user favorites and ability to add/delete/modify stories."
        preview={preview_hackorsnooze}
        link={'https://wongco.github.io/hack-or-snooze-fe/'}
        githubLink={'https://github.com/wongco/hack-or-snooze-fe'}
        alt={'hack or snooze preview image'}
      />
      <StyledDivider />
      {/* <PortfolioItem
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
      /> */}
      {/* <PortfolioItem>Meme Generator</PortfolioItem> 
      <PortfolioItem>Hack or Snooze</PortfolioItem> */}
    </StyledPortfolioContainer>
  );
};

export default Portfolio;
