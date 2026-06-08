import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import type { CSSVariables } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as stylex from "@stylexjs/stylex";
import { forwardRef } from "react";
import type { CSSProperties, ForwardedRef } from "react";

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

const IconLink = forwardRef(
  (
    { hovercolor = "black", icon, href }: IconLinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    const hoverColorStyles = stylex.props(
      styles.fontAwesome(hovercolor),
    ) as Record<string, CSSProperties & CSSVariables>;

    return (
      <a ref={ref} href={href}>
        <FontAwesomeIcon {...hoverColorStyles} icon={icon} size="2x" />
      </a>
    );
  },
);

export default IconLink;
