import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0;

  /* background: linear-gradient(to bottom, white, #ffb900); */
`;

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
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
  color: black;
  font-size: 3vw;
  font-weight: 300;
  line-height: 1.5em;

  @media (max-width: 576px) {
    font-size: 2.1em;
    line-height: 1.25em;
  }
`;

const StyledBody = styled.div`
  color: black;
  font-size: 2.2em;
  line-height: 1.75em;
  width: 50%;
  font-weight: 300;
  padding: 2em 0;

  @media (max-width: 576px) {
    font-size: 1.25em;
    line-height: 1.5em;
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
        Administrator designing and implementing technology solutions to solve critical business
        needs and challenges. You can now find me tackling new challenges as a full stack software
        engineer coding primarily in JavaScript and&nbsp;Python.
      </StyledBody>
    </StyledContainer>
  );
};

export default About;
