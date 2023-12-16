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
import IconLink from "../../atoms/IconLink";
import TextLink from "../../atoms/TextLink";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  navContainerStyles: {
    display: "flex",
    width: "100%",
    flexFlow: "row",
    flexWrap: {
      default: "nowrap",
      "@media (max-width: 576px)": "wrap",
    },
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "2em 2em 18em white",
  },
  navLinkBaseStyles: {
    flexFlow: {
      default: "row",
      "@media (max-width: 576px)": "column",
    },
    flexWrap: {
      default: "nowrap",
      "@media (max-width: 576px)": "wrap",
    },
    alignItems: "center",
    flexGrow: {
      "@media (max-width: 576px)": "1",
    },
    flexShrink: {
      "@media (max-width: 576px)": "1",
    },
    flexBasis: {
      "@media (max-width: 576px)": "100%",
    },
    margin: {
      "@media (max-width: 576px)": "0.5em 0",
    },
  },
  navLinkCollapsedStyles: {
    display: {
      default: "flex",
      "@media (max-width: 576px)": "none",
    },
  },
  navLinkNotCollapsedStyles: {
    display: {
      default: "flex",
      "@media (max-width: 576px)": "block",
    },
  },
  navLinkItemStyles: {
    listStyle: "none",
    fontWeight: "bold",
    display: {
      "@media (max-width: 576px)": "flex",
    },
    justifyContent: {
      "@media (max-width: 576px)": "flex-end",
    },
    margin: {
      "@media (max-width: 576px)": "0.5em 0",
    },
  },
});

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

  const styledNavLinkStyles = stylex.props(
    styles.navLinkBaseStyles,
    isCollapsed
      ? styles.navLinkCollapsedStyles
      : styles.navLinkNotCollapsedStyles,
  );

  return (
    <nav {...stylex.props(styles.navContainerStyles)}>
      <StyledHome>
        <StyledHomeLink href="#home">WongCo</StyledHomeLink>
      </StyledHome>
      <StyledBar onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </StyledBar>
      <StyledRightNav>
        <ol {...styledNavLinkStyles}>
          <li {...stylex.props(styles.navLinkItemStyles)}>
            <TextLink href="#about" onClick={handleClick} title="About" />
          </li>
          <li {...stylex.props(styles.navLinkItemStyles)}>
            <TextLink
              href="#portfolio"
              onClick={handleClick}
              title="Portfolio"
            />
          </li>
          <StyledContactLinks>
            <IconLink
              icon={faEnvelope}
              href="mailto:ginson.wong+hello@gmail.com"
              hovercolor="orange"
            />
            <IconLink
              icon={faAngellist}
              href="https://angel.co/wongco"
              hovercolor="pink"
            />
            <IconLink
              icon={faGithub}
              href="https://github.com/wongco"
              hovercolor="purple"
            />
            <IconLink
              icon={faLinkedin}
              href="https://www.linkedin.com/in/ginson"
              hovercolor="#0077B5"
            />
          </StyledContactLinks>
        </ol>
      </StyledRightNav>
    </nav>
  );
}
