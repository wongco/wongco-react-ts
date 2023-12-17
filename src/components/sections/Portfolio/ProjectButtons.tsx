import { faApple, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  detailsContainerStyles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: {
      default: "flex-start",
      "@media (max-width: 767.98px)": "center",
    },
    height: "3em",
    marginTop: "1em",
    width: {
      default: "15vw",
      "@media (max-width: 767.98px)": "50vw",
    },
    maxWidth: "500px",
  },
  linkStyles: {
    textDecoration: "none",
    width: "7em",
    height: "100%",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "lightgray",
    paddingLeft: "0.5em",
    paddingRight: "0.5em",
    backgroundColor: {
      default: "lightgoldenrodyellow",
      ":hover": "steelblue",
    },
    transitionProperty: "background-color",
    transitionDuration: "0.5s",
  },
  linkTextStyles: {
    marginLeft: "0.5em",
  },
  detailsTabStyles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 300,
    width: "100%",
    height: "100%",
    color: "black",
  },
});

interface Props {
  appleAppStoreLink?: string;
  githubLink?: string;
}

export default function ProjectButtons({
  appleAppStoreLink,
  githubLink,
}: Props) {
  return (
    <div {...stylex.props(styles.detailsContainerStyles)}>
      {appleAppStoreLink ? (
        <a {...stylex.props(styles.linkStyles)} href={appleAppStoreLink}>
          <div {...stylex.props(styles.detailsTabStyles)}>
            <FontAwesomeIcon icon={faApple} size="1x" />
            <div {...stylex.props(styles.linkTextStyles)}>App Store</div>
          </div>
        </a>
      ) : null}
      {githubLink ? (
        <a {...stylex.props(styles.linkStyles)} href={githubLink}>
          <div {...stylex.props(styles.detailsTabStyles)}>
            <FontAwesomeIcon
              icon={faGithub}
              size="1x"
              style={{ padding: "0" }}
            />
            <div {...stylex.props(styles.linkTextStyles)}>Github</div>
          </div>
        </a>
      ) : null}
    </div>
  );
}
