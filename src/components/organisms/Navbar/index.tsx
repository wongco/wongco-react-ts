import {
  faAngellist,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import NavLinkItem from "../../molecules/NavLinkItem";
import NavLinks from "../../molecules/NavLinks";
import FontAwesomeLink from "../../atoms/FontAwesomeLink";

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  flex-flow: row none;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2em 2em 18em white;
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
  margin-right: 2em;

  @media (max-width: 576px) {
    display: flex;
    cursor: pointer;
  }
`;

const StyledHomeLink = styled.a`
  text-decoration: none;
  color: black;
  padding: 0.75em;
  border-radius: 10%;
  font-size: 1.5em;
  font-weight: 400;

  @media (max-width: 576px) {
    flex: 1 1 100%;
    padding: 0.1em;
  }
`;

const StyledRightNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 2em;

  @media (max-width: 576px) {
    flex: 1 1 100%;
  }
`;

const StyledContactLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleClick = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <StyledNav>
      <StyledHome>
        <StyledHomeLink href="#home">WongCo</StyledHomeLink>
      </StyledHome>
      <StyledBar onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} size={"2x"} />
      </StyledBar>
      <StyledRightNav>
        <NavLinks isCollapsed={isCollapsed}>
          <NavLinkItem onClick={handleClick} href="#about" title="About" />
          <NavLinkItem
            onClick={handleClick}
            href="#portfolio"
            title="Portfolio"
          />
          <StyledContactLinks>
            <FontAwesomeLink
              icon={faEnvelope}
              href="mailto:ginson.wong+hello@gmail.com"
              hovercolor="orange"
            />
            <FontAwesomeLink
              icon={faAngellist}
              href="https://angel.co/wongco"
              hovercolor="pink"
            />
            <FontAwesomeLink
              icon={faGithub}
              href="https://github.com/wongco"
              hovercolor="purple"
            />
            <FontAwesomeLink
              icon={faLinkedin}
              href="https://www.linkedin.com/in/ginson"
              hovercolor="#0077B5"
            />
          </StyledContactLinks>
        </NavLinks>
      </StyledRightNav>
    </StyledNav>
  );
}
