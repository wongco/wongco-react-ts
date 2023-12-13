import styled from "styled-components";
import PortfolioInfoSection from "./PortfolioInfoSection";

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

export default function PortfolioHackSnooze({
  preview,
  title,
  githubLink,
  alt,
  text,
  apple,
  tags,
}: Props) {
  return (
    <StyledHackSnoozeContainer>
      <StyledImgContainer>
        <StyledImg src={preview} alt={alt} />
      </StyledImgContainer>
      <PortfolioInfoSection
        githubLink={githubLink}
        tags={tags}
        apple={apple}
        title={title}
        text={text}
      />
    </StyledHackSnoozeContainer>
  );
}

interface Props {
  title: string;
  link?: string;
  apple?: string;
  githubLink?: string;
  preview: string;
  alt: string;
  text: string;
  tags: string[];
}
