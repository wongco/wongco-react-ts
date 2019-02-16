import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ContactBar from '../../molecules/ContactBar';
import FooterButtonLink from '../../molecules/FooterButtonLink';

const Contact = () => {
  return (
    <ContactBar id="contact">
      <ContactBar.FaLink icon={faEnvelope} href="mailto:ginson.wong+hello@gmail.com" />
      <ContactBar.FaLink icon={faPenSquare} href="https://wongco.github.io/wongcoblog/" />
      <ContactBar.FaLink icon={faGithub} href="https://github.com/wongco" />
      <ContactBar.FaLink icon={faLinkedin} href="https://www.linkedin.com/in/ginson" />
      <FooterButtonLink href="resume.pdf">Resume</FooterButtonLink>
    </ContactBar>
  );
};

export default Contact;
