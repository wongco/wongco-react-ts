import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import type { CSSVariables } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as stylex from "@stylexjs/stylex";
import type { CSSProperties } from "react";

const styles = stylex.create({
  fontAwesome: (hoverColor: string) => ({
    margin: "15px",
    color: {
      default: "Dimgray",
      ":hover": hoverColor,
    },
    transitionProperty: "color",
    transitionDuration: "0.5s",
  }),
});

type IconLinkProps = {
  hovercolor?: string;
  icon: IconDefinition;
  href: string;
};

export default function IconLink({
  hovercolor = "black",
  icon,
  href,
}: IconLinkProps) {
  const hoverColorStyles = stylex.props(
    styles.fontAwesome(hovercolor),
  ) as Record<string, CSSProperties & CSSVariables>;

  return (
    <a href={href}>
      <FontAwesomeIcon {...hoverColorStyles} icon={icon} size="2x" />
    </a>
  );
}
