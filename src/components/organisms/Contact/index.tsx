import { faAngellist, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';
import ContactBar from '../../molecules/ContactBar';
import FooterButtonLink from '../../molecules/FooterButtonLink';

const StyledGradient = styled.div`
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#f6e6b4+0,ed9017+100;Yellow+3D+%231 */
  background: #f6e6b4; /* Old browsers */
  background: -moz-linear-gradient(-45deg, #f6e6b4 0%, #ed9017 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    #f6e6b4 0%,
    #ed9017 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    #f6e6b4 0%,
    #ed9017 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f6e6b4', endColorstr='#ed9017',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
`;

const StyledText = styled.p`
  font-size: 2em;
  font-weight: 600;
  padding: 10px 20px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  margin: 0;

  @media (max-width: 576px) {
    font-size: 1.5em;
  }
`;

const StyledCopyrightNote = styled.p`
  background-color: #343a40;
  color: white;
  text-align: center;
  font-weight: 600;
  margin: 0;
  padding: 10px 0;
`;

const Contact = () => {
  return (
    <footer>
      <StyledGradient>
        <StyledText>Contact me!</StyledText>
        <ContactBar id="contact">
          <ContactBar.FaLink icon={faEnvelope} href="mailto:ginson.wong+hello@gmail.com" />
          <ContactBar.FaLink icon={faAngellist} href="https://angel.co/ginson-wong" />
          {/* <ContactBar.FaLink icon={faPenSquare} href="https://wongco.github.io/wongcoblog/" /> */}
          <ContactBar.FaLink icon={faGithub} href="https://github.com/wongco" hoverColor="black" />
          <ContactBar.FaLink
            icon={faLinkedin}
            href="https://www.linkedin.com/in/ginson"
            hoverColor="#0077B5"
          />
          {/* <FooterButtonLink href="resume.pdf">Resume</FooterButtonLink> */}
        </ContactBar>
      </StyledGradient>
      <StyledCopyrightNote>Designed and built by Ginson Wong © 2019</StyledCopyrightNote>
    </footer>
  );
};

export default Contact;
