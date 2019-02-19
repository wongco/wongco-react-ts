import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0;
  background-color: #343a40;
  color: white;
`;

const TransformContainer = styled.div`
  display: flex;
  flex-basis: row wrap;
  justify-content: space-around;
  font-size: 2.5em;
  font-weight: bold;
  text-align: center;
  margin: 30px 0;
`;

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.75em;
  font-weight: 700;
  font-style: italic;
  width: 50%;
  border: 1px solid white;
  padding: 10px;
  margin: 20px 0;
`;

const StyledBoxText = styled.p`
  text-align: center;
`;

const StyledBody = styled.div`
  font-size: 1.25em;
  line-height: 2em;
  width: 50%;
  font-weight: 600;
`;

const About = () => {
  return (
    <StyledContainer id="about">
      <TransformContainer>
        <div>Inspired&nbsp;ideas. </div>
        <div>Attention&nbsp;to&nbsp;detail. </div>
        <div>Responsive&nbsp;design. </div>
      </TransformContainer>
      <StyledBox>
        <StyledBoxText>
          Behind every problem is an elegant solution waiting to be&nbsp;created.
        </StyledBoxText>
      </StyledBox>
      <StyledBody>
        I'm a software engineer currently based in San Francisco. Prior to this, I was a Systems
        Administrator/Engineer designing and implementing technology solutions to tackle critical
        business needs and challenges. You can now find me tackling new challenges and interesting
        problems as a full stack web developer coding primarily in JavaScript and Python.
      </StyledBody>
    </StyledContainer>
  );
};

export default About;
