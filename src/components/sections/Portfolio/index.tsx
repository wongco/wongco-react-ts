import styled from "styled-components";
import preview_groupmuse from "../../../pics/groupmuse04.png";
import preview_hackorsnooze from "../../../pics/hackorsnooze03.jpg";
import preview_jobly from "../../../pics/jobly03.jpg";
import PortfolioGroupmuse from "./PortfolioGroupmuse";
import PortfolioHackSnooze from "./PortfolioHackOrSnooze";
import PortfolioJobly from "./PortfolioJobly";

const StyledPortfolioContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: 20px;
`;

const StyledDivider = styled.hr`
  border-radius: 50px;
  color: gray;
  width: 80vw;
  height: 0.25px;
  margin: 0;
`;

export default function Portfolio() {
  return (
    <StyledPortfolioContainer id="portfolio">
      <PortfolioGroupmuse
        title="Groupmuse"
        tags={[
          "React Native",
          "Render Props",
          "Compound Components",
          "Atomic Design",
        ]}
        text="Refactoring the templates and dependent components for the authorization workflow enabled our agile team to create a foundation for rebuilding the react native mobile app. This was achieved using compound components, render props, and atomic design."
        preview={preview_groupmuse}
        apple={"https://itunes.apple.com/us/app/groupmuse/id942675649"}
        alt={"groupmuse preview image"}
      />
      <StyledDivider />
      <PortfolioJobly
        title="Jobly"
        tags={[
          "React",
          "Express",
          "Styled Components",
          "RESTful API",
          "PostgreSQL",
          "JWT",
        ]}
        text="Built using a React frontend and a RESTful API backend, Jobly is a job listing board and job application tool built with user authentication and job/company searching."
        preview={preview_jobly}
        githubLink={"https://github.com/wongco/react-jobly"}
        alt={"jobly preview image"}
      />
      <StyledDivider />
      <PortfolioHackSnooze
        title="Hack or Snooze"
        tags={["jQuery", "Express", "RESTful API", "PostgreSQL", "JWT"]}
        text="Hack or Snooze is a Full CRUD story board application clone of Hacker News built with a jQuery frontend and an Express.js backend. It features user authentication, user favorites and the ability to add/delete/modify stories."
        preview={preview_hackorsnooze}
        githubLink={"https://github.com/wongco/hack-or-snooze-fe"}
        alt={"hack or snooze preview image"}
      />
      <StyledDivider />
    </StyledPortfolioContainer>
  );
}
