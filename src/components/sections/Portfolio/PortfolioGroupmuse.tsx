import styled from "styled-components";
import ProjectInfo from "./ProjectInfo";

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

interface Props {
  title: string;
  appleAppStoreLink?: string;
  githubLink?: string;
  preview: string;
  alt: string;
  text: string;
  tags: string[];
}

export default function PortfolioGroupmuse({
  preview,
  title,
  githubLink,
  alt,
  text,
  appleAppStoreLink,
  tags,
}: Props) {
  return (
    <StyledGroupmuseContainer>
      <StyledImgContainer>
        <StyledImg src={preview} alt={alt} />
      </StyledImgContainer>
      <ProjectInfo
        githubLink={githubLink}
        tags={tags}
        appleAppStoreLink={appleAppStoreLink}
        header={title}
        body={text}
      />
    </StyledGroupmuseContainer>
  );
}
