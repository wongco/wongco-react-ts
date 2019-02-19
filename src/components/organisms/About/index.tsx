import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0;
  /* background-color: #343a40; */
  color: white;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#f6a50e+0,c97207+100 */
  background: #f6a50e; /* Old browsers */
  background: -moz-linear-gradient(-45deg, #f6a50e 0%, #c97207 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    #f6a50e 0%,
    #c97207 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    #f6a50e 0%,
    #c97207 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f6a50e', endColorstr='#c97207',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
`;

const TransformContainer = styled.div`
  display: flex;
  flex-basis: row wrap;
  justify-content: space-around;
  font-size: 3em;
  font-weight: 300;
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
  font-size: 1.75em;
  line-height: 2em;
  width: 50%;
  font-weight: 300;
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
