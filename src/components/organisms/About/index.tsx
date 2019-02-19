import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0;

  background: linear-gradient(to bottom, white, #ffb900);
`;

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  background-color: gray;
  padding: 1em 1em;
  margin: 20px 0;

  @media (max-width: 576px) {
    width: 75%;
  }
`;

const StyledBoxText = styled.p`
  padding: 0;
  margin: 0;
  text-align: center;
  color: white;
  font-size: 3em;
  font-weight: 300;
  line-height: 1.5em;

  @media (max-width: 576px) {
    font-size: 1.5em;
    line-height: 1.25em;
  }
`;

const StyledBody = styled.div`
  color: black;
  font-size: 1.75em;
  line-height: 2em;
  width: 50%;
  font-weight: 300;

  @media (max-width: 576px) {
    font-size: 1.25em;
    width: 75%;
  }
`;

const About = () => {
  return (
    <StyledContainer id="about">
      <StyledBox>
        <StyledBoxText>
          Behind every problem is an elegant solution waiting to be&nbsp;created.
        </StyledBoxText>
      </StyledBox>
      <StyledBody>
        I'm a software engineer currently based in San Francisco. Prior to this, I was a Systems
        Administrator/Engineer designing and implementing technology solutions to solve critical
        business needs and challenges. You can now find me tackling new challenges and interesting
        problems as a full stack software engineering coding primarily in JavaScript
        and&nbsp;Python.
      </StyledBody>
    </StyledContainer>
  );
};

export default About;
