import styled from "styled-components";
import ProjectInfo from "./ProjectInfo";
import preview_jobly from "../../../pics/jobly03.jpg";

const StyledJoblyContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
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

export default function PortfolioJobly() {
  return (
    <StyledJoblyContainer>
      <StyledImgContainer>
        <StyledImg src={preview_jobly} alt="jobly preview image" />
      </StyledImgContainer>
      <ProjectInfo
        githubLink="https://github.com/wongco/react-jobly"
        header="Jobly"
        body="Built using a React frontend and a RESTful API backend, Jobly is a job listing board and job application tool built with user authentication and job/company searching."
        tags={[
          "React",
          "Express",
          "Styled Components",
          "RESTful API",
          "PostgreSQL",
          "JWT",
        ]}
      />
    </StyledJoblyContainer>
  );
}
