import styled from "styled-components";
import ProjectInfo from "./ProjectInfo";
import preview_groupmuse from "../../../pics/groupmuse04.png";

const StyledGroupmuseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  border-top: 1px solid gray;
  padding-top: 3em;

  @media (max-width: 767.98px) {
    flex-direction: column;
  }
`;

const StyledImgContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  width: 25vw;
  margin-top: 50px;

  @media (max-width: 767.98px) {
    margin-top: 0;
    width: 70vw;
  }
`;

const StyledImg = styled.img`
  width: 100%;
`;

export default function PortfolioGroupmuse() {
  return (
    <StyledGroupmuseContainer>
      <StyledImgContainer>
        <StyledImg src={preview_groupmuse} alt="groupmuse preview image" />
      </StyledImgContainer>
      <ProjectInfo
        tags={[
          "React Native",
          "Render Props",
          "Compound Components",
          "Atomic Design",
        ]}
        appleAppStoreLink="https://itunes.apple.com/us/app/groupmuse/id942675649"
        header="Groupmuse"
        body="Refactoring the templates and dependent components for the authorization workflow enabled our agile team to create a foundation for rebuilding the react native mobile app. This was achieved using compound components, render props, and atomic design."
      />
    </StyledGroupmuseContainer>
  );
}
