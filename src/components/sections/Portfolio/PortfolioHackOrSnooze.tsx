import styled from "styled-components";
import ProjectInfo from "./ProjectInfo";
import preview_hackorsnooze from "../../../pics/hackorsnooze03.jpg";

const StyledHackSnoozeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 5em;
  padding-bottom: 5em;

  @media (max-width: 767.98px) {
    justify-content: center;
    flex-direction: column;
    padding-top: 0em;
    padding-bottom: 0em;
  }
`;

const StyledImgContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  width: 25vw;
  margin: 4em;

  @media (max-width: 767.98px) {
    margin-top: 2em;
    margin-bottom: 2em;
    height: 20vh;
    width: 100%;
    justify-content: center;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  box-shadow: 5px 5px 18px black;

  @media (max-width: 767.98px) {
    width: auto;
    height: 100%;
  }
`;

export default function PortfolioHackSnooze() {
  return (
    <StyledHackSnoozeContainer>
      <StyledImgContainer>
        <StyledImg
          src={preview_hackorsnooze}
          alt="hack or snooze preview image"
        />
      </StyledImgContainer>
      <ProjectInfo
        githubLink="https://github.com/wongco/hack-or-snooze-fe"
        tags={["jQuery", "Express", "RESTful API", "PostgreSQL", "JWT"]}
        header="Hack or Snooze"
        body="Hack or Snooze is a Full CRUD story board application clone of Hacker News built with a jQuery frontend and an Express.js backend. It features user authentication, user favorites and the ability to add/delete/modify stories."
      />
    </StyledHackSnoozeContainer>
  );
}
