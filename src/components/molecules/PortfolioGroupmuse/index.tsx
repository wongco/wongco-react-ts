import React from 'react';
import styled from 'styled-components';
import PortfolioInfoSection from '../PortfolioInfoSection';

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

export default function PortfolioGroupmuse({
  preview,
  title,
  githubLink,
  alt,
  text,
  apple,
  tags,
}: Props) {
  return (
    <StyledGroupmuseContainer>
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
    </StyledGroupmuseContainer>
  );
}

interface Props {
  title: string;
  link?: string;
  apple?: string;
  githubLink?: string;
  preview: any;
  alt: string;
  text: string;
  tags: string[];
}
