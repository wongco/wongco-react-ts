import { faAngellist, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import ContactBar from '../../molecules/ContactBar';
import NavLinks from '../../molecules/NavLinks';

const StyledNav = styled.nav`
  display: flex;
  flex-flow: row none;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2em 2em 18em white;
  background-color: red;
  font-family: Helvetica Neue;

  @media (max-width: 576px) {
    flex-flow: row wrap;
  }
`;

const StyledHome = styled.p`
  font-size: 120%;
  font-weight: bold;
  margin-left: 1em;

  @media (max-width: 576px) {
    flex: 1;
    margin: 0.75em;
  }
`;

/** Component for Mobile Only Dropdown Button */
const StyledBar = styled.div`
  display: none;

  @media (max-width: 576px) {
    display: flex;
    cursor: pointer;
    margin-right: 1em;
  }
`;

const StyledHomeLink = styled.a`
  text-decoration: none;
  color: white;
  padding: 0.75em;
  border-radius: 10%;
  font-size: 1.5em;
  font-weight: 500;

  @media (max-width: 576px) {
    flex: 1 1 100%;
    padding: 0.1em;
  }
`;

interface StateProps {
  isCollapsed: boolean;
}

const StyledRightNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 2em;
`;

class Navbar extends PureComponent {
  public state = {
    isCollapsed: true,
  };

  /** handle collapsing of navbar in mobile view */
  public handleClick = () => {
    this.setState((st: StateProps) => ({ isCollapsed: !st.isCollapsed }));
  };

  public render() {
    const { handleClick } = this;
    return (
      <StyledNav>
        <StyledHome>
          <StyledHomeLink href="#home">WongCo</StyledHomeLink>
        </StyledHome>
        <StyledBar onClick={handleClick}>
          <FontAwesomeIcon icon={faBars} size={'2x'} />
        </StyledBar>
        <StyledRightNav>
          <NavLinks isCollapsed={this.state.isCollapsed}>
            <NavLinks.Item onClick={handleClick} href="#about">
              About
            </NavLinks.Item>
            <NavLinks.Item onClick={handleClick} href="#portfolio">
              Portfolio
            </NavLinks.Item>
            <ContactBar.FaLink icon={faEnvelope} href="mailto:ginson.wong+hello@gmail.com" />
            <ContactBar.FaLink
              icon={faAngellist}
              href="https://angel.co/ginson-wong"
              hovercolor="pink"
            />
            <ContactBar.FaLink icon={faGithub} href="https://github.com/wongco" />
            <ContactBar.FaLink
              icon={faLinkedin}
              href="https://www.linkedin.com/in/ginson"
              hovercolor="#0077B5"
            />
          </NavLinks>
        </StyledRightNav>
      </StyledNav>
    );
  }
}

export default Navbar;
