import IconLink from "../../atoms/IconLink";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  footer: {
    padding: "0",
    margin: "0",
  },
  copyrightContainer: {
    display: "flex",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 400,
    fontSize: "1.25em",
    margin: "0",
    padding: "1em 1em",
  },
  copyrightNote: {
    textAlign: {
      default: "right",
      "@media (max-width: 767.98px)": "center",
    },
    paddingRight: {
      default: "2em",
      "@media (max-width: 767.98px)": "0",
    },
    fontSize: {
      default: "1vw",
      "@media (max-width: 767.98px)": "0.8em",
    },
    width: {
      "@media (max-width: 767.98px)": "70%",
    },
  },
});

const copyRightText = "Designed and built by Ginson Wong © 2023";

export default function Contact() {
  return (
    <footer {...stylex.props(styles.footer)}>
      <div {...stylex.props(styles.copyrightContainer)}>
        <IconLink href="#top" icon={faArrowAltCircleUp} hovercolor="blue" />
        <div {...stylex.props(styles.copyrightNote)}>{copyRightText}</div>
      </div>
    </footer>
  );
}
