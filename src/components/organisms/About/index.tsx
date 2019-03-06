import AOS from 'aos';
import React from 'react';
import styled from 'styled-components';
import preview from '../../../pics/profile_pic1c.jpg';

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0;

  @media (max-width: 767.98px) {
    padding: 0;
  }
`;

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  padding: 0em 1em;
  margin: 20px 0;

  @media (max-width: 767.98px) {
    padding: 1em;
    width: 75%;
    margin: 0;
  }
`;

const AboutHeader = styled.p`
  padding: 0;
  margin: 0;
  text-align: center;
  color: black;
  font-size: 3vw;
  font-weight: 300;
  line-height: 1.5em;

  @media (max-width: 767.98px) {
    font-size: 2.1em;
    line-height: 1.25em;
  }
`;

const StyledAboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 767.98px) {
    flex-direction: column;
  }
`;

const StyledImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18em;
  width: 18em;
  padding: 5em;
  overflow: hidden;

  @media (max-width: 767.98px) {
    padding: 0;
  }
`;

const StyledImg = styled.img`
  border-radius: 50%;
  border: 5px solid white;
  transform: rotate(-2deg);
  object-fit: contain;

  width: auto;
  height: 250px;
  box-shadow: 5px 5px 18px gray;

  @media (max-width: 767.98px) {
  }
`;

const StyledBody = styled.div`
  color: #45474c;
  font-size: 1.75vw;
  line-height: 1.75em;
  width: 50%;
  font-weight: 300;
  padding: 0;

  @media (max-width: 767.98px) {
    padding: 1em 0;
    font-size: 5vw;
    line-height: 1.5em;
    width: 70vw;
  }
`;

class About extends React.Component {
  public componentDidMount() {
    AOS.init({
      duration: 400,
    });
  }
  // const About = () => {
  public render() {
    return (
      <StyledContainer id="about">
        <StyledBox>
          <AboutHeader>
            Behind every problem is an elegant solution waiting to be&nbsp;created.
          </AboutHeader>
        </StyledBox>
        <StyledAboutContainer>
          <StyledImgContainer
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"
          >
            <StyledImg src={preview} alt={'headshot'} />
          </StyledImgContainer>
          <StyledBody>
            I'm a software engineer currently based in San Francisco. Prior to this, I was a Systems
            Administrator designing and implementing technology solutions to solve critical business
            challenges. You can now find me tackling new challenges as a full stack software
            engineer coding primarily in JavaScript and&nbsp;Python.
          </StyledBody>
        </StyledAboutContainer>
      </StyledContainer>
    );
  }
}

export default About;
