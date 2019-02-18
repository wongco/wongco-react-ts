import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 50px 0;
  background-color: #343a40;
  color: white;
`;

const StyledBody = styled.div`
  width: 70%;
`;

const About = () => {
  return (
    <StyledContainer id="about">
      <div>
        <span>Inspired ideas.&nbsp;</span>
        <span>Attention to detail.&nbsp;</span>
        <span>Responsive design.&nbsp;</span>
      </div>
      <div>
        <p>Behind every problem is an elegant solution waiting to be created.</p>
      </div>
      <StyledBody>
        Having crafted solutions as a Systems Admin/Engineer, I firmly believe in the ability of
        technology to bring people together and address both societal and business challenges. I now
        take that same passion for solving problems to full stack web development.
      </StyledBody>
    </StyledContainer>
  );
};

export default About;
