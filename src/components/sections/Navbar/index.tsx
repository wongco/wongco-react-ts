import {
  faAngellist,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as stylex from "@stylexjs/stylex";
import { useState } from "react";

import IconLink from "../../atoms/IconLink";
import TextLink from "../../atoms/TextLink";

const styles = stylex.create({
  navContainer: {
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
  navLinkBase: {
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
  navLinkCollapsed: {
    display: {
      default: "flex",
      "@media (max-width: 576px)": "none",
    },
  },
  navLinkNotCollapsed: {
    display: {
      default: "flex",
      "@media (max-width: 576px)": "block",
    },
  },
  navLinkItem: {
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
  homeLinkContainer: {
    fontSize: "120%",
    fontWeight: "bold",
    flexGrow: {
      "@media (max-width: 576px)": "1",
    },
    margin: {
      default: "1em",
      "@media (max-width: 576px)": "0.75em",
    },
  },
  homeLink: {
    textDecoration: "none",
    color: "black",
    padding: {
      default: "0.75em",
      "@media (max-width: 576px)": "0.1em",
    },
    borderRadius: "10%",
    fontSize: "1.5em",
    fontWeight: 400,
    flexGrow: {
      "@media (max-width: 576px)": "1",
    },
    flexShrink: {
      "@media (max-width: 576px)": "1",
    },
    flexBasis: {
      "@media (max-width: 576px)": "100%",
    },
  },
  bar: {
    display: {
      default: "none",
      "@media (max-width: 576px)": "flex",
    },
    marginRight: "2em",
    cursor: {
      "@media (max-width: 576px)": "pointer",
    },
  },
  rightNavContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: "2em",
    flexGrow: {
      "@media (max-width: 576px)": "1",
    },
    flexShrink: {
      "@media (max-width: 576px)": "1",
    },
    flexBasis: {
      "@media (max-width: 576px)": "100%",
    },
  },
  contactLinkContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleClick = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  const menuIcon = isCollapsed ? faBars : faTimes;

  const styledNavLinkStyles = stylex.props(
    styles.navLinkBase,
    isCollapsed ? styles.navLinkCollapsed : styles.navLinkNotCollapsed,
  );

  return (
    <nav aria-label="Main navigation" {...stylex.props(styles.navContainer)}>
      <p {...stylex.props(styles.homeLinkContainer)}>
        <a {...stylex.props(styles.homeLink)} href="#home">
          WongCo
        </a>
      </p>
      <button
        type="button"
        {...stylex.props(styles.bar)}
        onClick={handleClick}
        aria-label={
          isCollapsed ? "Open navigation menu" : "Close navigation menu"
        }
        aria-expanded={isCollapsed}
      >
        <FontAwesomeIcon icon={menuIcon} size="2x" />
      </button>
      <div {...stylex.props(styles.rightNavContainer)}>
        <ol aria-hidden={isCollapsed} {...styledNavLinkStyles}>
          <li {...stylex.props(styles.navLinkItem)}>
            <TextLink href="#about" onClick={handleClick} title="About" />
          </li>
          <li {...stylex.props(styles.navLinkItem)}>
            <TextLink
              href="#portfolio"
              onClick={handleClick}
              title="Portfolio"
            />
          </li>
          <div {...stylex.props(styles.contactLinkContainer)}>
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
          </div>
        </ol>
      </div>
    </nav>
  );
}
