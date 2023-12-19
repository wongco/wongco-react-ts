import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as stylex from "@stylexjs/stylex";

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
  return (
    <a href={href}>
      <FontAwesomeIcon
        {...stylex.props(styles.fontAwesome(hovercolor))}
        icon={icon}
        size="2x"
      />
    </a>
  );
}
