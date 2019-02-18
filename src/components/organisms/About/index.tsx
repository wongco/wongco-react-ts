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
  font-size: 2em;
  width: 50%;
  font-weight: 600;
`;

const About = () => {
  return (
    <StyledContainer id="about">
      <TransformContainer>
        <span>Inspired ideas.&nbsp;</span>
        <span>Attention to detail.&nbsp;</span>
        <span>Responsive design.&nbsp;</span>
      </TransformContainer>
      <StyledBox>
        <StyledBoxText>
          Behind every problem is an elegant solution waiting to be created.
        </StyledBoxText>
      </StyledBox>
      <StyledBody>
        Having crafted solutions as a Systems Admin/Engineer, I firmly believe in the ability of
        technology to bring people together and address both societal and business challenges. I now
        take that same passion for solving problems to full stack web development.
      </StyledBody>
    </StyledContainer>
  );
};

export default About;
