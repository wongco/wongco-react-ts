import AOS from 'aos';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import PortfolioButtons from '../PortfolioButtons';

/** Project Verbiage Section */
const PortfolioInfoSectionContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 40vw;
  margin-left: 1.5em;
  margin-bottom: 1.5em;

  @media (max-width: 767.98px) {
    margin: 0;
    margin-bottom: 1.5em;
    align-items: center;
    width: 70vw;
    order: 1;
  }
`;

const StyledProjectTitle = styled.div`
  font-size: 2.2vw;
  margin: 7px 0;
  padding: 5px 0;
  font-weight: 400;

  @media (max-width: 767.98px) {
    padding-top: 0;
    margin-top: 18px;
    font-size: 7vw;
    font-weight: 500;
  }
`;

const StyledTags = styled.div`
  font-weight: 300;
  font-size: 1.2vw;
  margin: 0.3em 0;
  font-style: italic;
  border-left: 2px solid blue;
  padding-left: 10px;
  margin-left: 1px;
  width: 100%;

  @media (max-width: 767.98px) {
    font-size: 4vw;
    margin: 0.4em 0;
    margin-left: 1em;
  }
`;

const StyledBodyText = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
  color: #45474c;
  font-size: 1.5vw;
  line-height: 1.4em;
  font-weight: 300;
  width: 100%;
  padding-bottom: 1em 0;

  @media (max-width: 767.98px) {
    font-size: 5vw;
  }
`;

export default function PortfolioInfoSection({ title, githubLink, text, apple, tags }: Props) {
  useEffect(() => {
    AOS.init({
      duration: 400,
    });
  }, []);

  return (
    <PortfolioInfoSectionContainer
      data-aos="zoom-out"
      data-aos-delay="200"
      data-aos-easing="ease-in-sine"
    >
      <StyledProjectTitle>{title}</StyledProjectTitle>
      {tags ? <StyledTags>{tags.join(', ')}</StyledTags> : null}
      <StyledBodyText>{text}</StyledBodyText>
      <PortfolioButtons githubLink={githubLink} apple={apple} />
    </PortfolioInfoSectionContainer>
  );
}

interface Props {
  title: string;
  githubLink?: string;
  text: string;
  apple?: string;
  tags?: string[];
}
