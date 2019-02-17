import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const About = () => {
  return (
    <StyledContainer id="about">
      <div>
        Having crafted solutions as a Systems Admin/Engineer, I firmly believe in the ability of
        technology to bring people together and address both societal and business challenges. I now
        take that same passion for solving problems to full stack web development.
      </div>
    </StyledContainer>
  );
};

export default About;
