import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import * as stylex from "@stylexjs/stylex";
import { useRef } from "react";

import { useFocusVisible } from "../../../hooks/useFocusVisible";
import IconLink from "../../atoms/IconLink";

const focusStyles = stylex.create({
  focusVisible: {
    outline: "2px solid #0066CC",
    outlineOffset: "2px",
  },
});

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
  const scrollButtonRef = useRef<HTMLAnchorElement | null>(null);
  const scrollButtonVisible = useFocusVisible(scrollButtonRef);

  return (
    <footer {...stylex.props(styles.footer)}>
      <div {...stylex.props(styles.copyrightContainer)}>
        <IconLink
          ref={scrollButtonRef}
          href="#top"
          icon={faArrowAltCircleUp}
          hovercolor="blue"
          aria-label="Scroll to top"
          {...stylex.props(scrollButtonVisible && focusStyles.focusVisible)}
        />
        <div {...stylex.props(styles.copyrightNote)}>{copyRightText}</div>
      </div>
    </footer>
  );
}
