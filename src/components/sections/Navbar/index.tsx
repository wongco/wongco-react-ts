import {
  faAngellist,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
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
  homeLinkContainerStyles: {
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
  homeLinkStyles: {
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
  barStyles: {
    display: {
      default: "none",
      "@media (max-width: 576px)": "flex",
    },
    marginRight: "2em",
    cursor: {
      "@media (max-width: 576px)": "pointer",
    },
  },
  rightNavContainerStyles: {
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
  contactLinkContainerStyles: {
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

  const styledNavLinkStyles = stylex.props(
    styles.navLinkBaseStyles,
    isCollapsed
      ? styles.navLinkCollapsedStyles
      : styles.navLinkNotCollapsedStyles,
  );

  return (
    <nav {...stylex.props(styles.navContainerStyles)}>
      <p {...stylex.props(styles.homeLinkContainerStyles)}>
        <a {...stylex.props(styles.homeLinkStyles)} href="#home">
          WongCo
        </a>
      </p>
      <div {...stylex.props(styles.barStyles)} onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </div>
      <div {...stylex.props(styles.rightNavContainerStyles)}>
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
          <div {...stylex.props(styles.contactLinkContainerStyles)}>
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
